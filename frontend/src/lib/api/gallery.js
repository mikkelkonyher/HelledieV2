import { supabase } from '../supabase';
import imageCompression from 'browser-image-compression';

const IMAGE_COMPRESSION_OPTIONS = {
  maxSizeMB: 0.8,
  maxWidthOrHeight: 2000,
  useWebWorker: true,
  initialQuality: 0.8,
};

function isVideo(file) {
  return file.type.startsWith('video/');
}

export async function fetchGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('sort_order')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function uploadGalleryImage(file, onProgress) {
  let processedFile = file;
  let fileType = 'image';

  if (isVideo(file)) {
    fileType = 'video';
    // Upload video as-is — browser compression degrades quality too much
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

export async function reorderGalleryImages(orderedIds) {
  // Batch update sort_order based on array position
  const updates = orderedIds.map((id, index) =>
    supabase.from('gallery_images').update({ sort_order: index }).eq('id', id)
  );
  const results = await Promise.all(updates);
  const failed = results.find(r => r.error);
  if (failed) throw failed.error;
}
