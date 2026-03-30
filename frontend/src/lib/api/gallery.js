import { supabase } from '../supabase';

export async function fetchGalleryImages() {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('sort_order');
  if (error) throw error;
  return data;
}

export async function uploadGalleryImage(file, captionDa = '', captionEn = '', altDa = '', altEn = '') {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const storagePath = `gallery/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('gallery-images')
    .upload(storagePath, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('gallery-images')
    .getPublicUrl(storagePath);

  // Get the next sort order
  const { data: maxRow } = await supabase
    .from('gallery_images')
    .select('sort_order')
    .order('sort_order', { ascending: false })
    .limit(1)
    .single();

  const nextOrder = (maxRow?.sort_order || 0) + 1;

  const { data, error } = await supabase
    .from('gallery_images')
    .insert({
      url: publicUrl,
      storage_path: storagePath,
      caption_da: captionDa,
      caption_en: captionEn,
      alt_da: altDa,
      alt_en: altEn,
      sort_order: nextOrder,
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
