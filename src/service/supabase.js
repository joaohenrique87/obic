import { supabase } from '@/lib/supabaseClient';

const BUCKET = import.meta.env.VITE_SUPABASE_BUCKET;

export const fetchRelatoriosDoSupabase = async () => {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      });

    if (error) throw error;

    const arquivos = data
      .filter(file => file.name.endsWith('.pdf'))
      .map(file => {
        const { data: urlData } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(file.name);

        return {
          id: file.id ?? file.name,
          nome: file.name.replace('.pdf', '').replace(/-|_/g, ' '),
          linkPreview: urlData.publicUrl,
          linkDownload: urlData.publicUrl,
          thumb: null,
        };
      });

    return arquivos;
  } catch (error) {
    console.error('Erro ao buscar relatórios do Supabase:', error);
    return [];
  }
};