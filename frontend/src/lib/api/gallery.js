import { supabase } from '../supabase';
import imageCompression from 'browser-image-compression';

const IMAGE_COMPRESSION_OPTIONS = {
  maxSizeMB: 0.4,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
  fileType: 'image/webp',
};

function isVideo(file) {
  return file.type.startsWith('video/');
}

async function compressVideo(file) {
  // Use canvas + MediaRecorder to re-encode video at lower bitrate
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    video.src = URL.createObjectURL(file);

    video.onloadedmetadata = () => {
      // Scale down if larger than 720p
      const maxDim = 720;
      let width = video.videoWidth;
      let height = video.videoHeight;
      if (width > maxDim || height > maxDim) {
        const scale = maxDim / Math.max(width, height);
        width = Math.round(width * scale);
        height = Math.round(height * scale);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      const stream = canvas.captureStream(24); // 24 fps
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp8',
        videoBitsPerSecond: 800000, // 800kbps — aggressive compression
      });

      const chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = () => {
        URL.revokeObjectURL(video.src);
        const blob = new Blob(chunks, { type: 'video/webm' });
        const compressed = new File([blob], file.name.replace(/\.[^.]+$/, '.webm'), {
          type: 'video/webm',
        });
        resolve(compressed);
      };

      mediaRecorder.onerror = (e) => {
        URL.revokeObjectURL(video.src);
        reject(e);
      };

      mediaRecorder.start();

      video.onended = () => {
        mediaRecorder.stop();
      };

      const drawFrame = () => {
        if (video.ended || video.paused) return;
        ctx.drawImage(video, 0, 0, width, height);
        requestAnimationFrame(drawFrame);
      };

      video.play().then(() => {
        drawFrame();
      }).catch(reject);
    };

    video.onerror = () => {
      URL.revokeObjectURL(video.src);
      reject(new Error('Could not load video'));
    };
  });
}

export async function fetchGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function uploadGalleryImage(file, onProgress) {
  let processedFile = file;
  let fileType = 'image';

  if (isVideo(file)) {
    fileType = 'video';
    if (onProgress) onProgress('Komprimerer video...');
    try {
      processedFile = await compressVideo(file);
    } catch (err) {
      console.warn('Video compression failed, uploading original:', err);
      processedFile = file;
    }
  } else {
    if (onProgress) onProgress('Komprimerer billede...');
    try {
      processedFile = await imageCompression(file, IMAGE_COMPRESSION_OPTIONS);
    } catch (err) {
      console.warn('Image compression failed, uploading original:', err);
      processedFile = file;
    }
  }

  const fileExt = processedFile.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const storagePath = `gallery/${fileName}`;

  if (onProgress) onProgress('Uploader...');

  const { error: uploadError } = await supabase.storage
    .from('gallery-images')
    .upload(storagePath, processedFile);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('gallery-images')
    .getPublicUrl(storagePath);

  const { data, error } = await supabase
    .from('gallery_images')
    .insert({
      url: publicUrl,
      storage_path: storagePath,
      caption_da: '',
      caption_en: '',
      alt_da: '',
      alt_en: '',
      file_type: fileType,
      sort_order: 0,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateGalleryImage(id, updates) {
  const { data, error } = await supabase
    .from('gallery_images')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteGalleryImage(id, storagePath) {
  if (storagePath) {
    await supabase.storage.from('gallery-images').remove([storagePath]);
  }
  const { error } = await supabase
    .from('gallery_images')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function swapSortOrder(imageA, imageB) {
  const [{ error: errA }, { error: errB }] = await Promise.all([
    supabase.from('gallery_images').update({ sort_order: imageB.sort_order }).eq('id', imageA.id),
    supabase.from('gallery_images').update({ sort_order: imageA.sort_order }).eq('id', imageB.id),
  ]);
  if (errA) throw errA;
  if (errB) throw errB;
}
