import { supabase } from '../supabase';

export async function fetchAllSiteContent() {
  const { data, error } = await supabase
    .from('site_content')
    .select('*')
    .order('section');
  if (error) throw error;
  return data;
}

export async function fetchSiteContentBySection(section) {
  const { data, error } = await supabase
    .from('site_content')
    .select('*')
    .eq('section', section)
    .order('key');
  if (error) throw error;
  return data;
}

export async function updateSiteContent(id, valueDa, valueEn) {
  const { data, error } = await supabase
    .from('site_content')
    .update({ value_da: valueDa, value_en: valueEn })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}
