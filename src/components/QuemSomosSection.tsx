import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VIDEO_ID = "80EcQHpFv6Y";
const PLAYLIST_ID = "PLJDWpFL5ny_ooRDdzxZp13tFuJPb35Ih7";

const PlaylistSidebar = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`
        );
        const data = await res.json();
        const items = (data.items || []).map((item) => {
          const videoId = item.link.split('v=')[1]?.split('&')[0];
          return {
            id: videoId,
            title: item.title,
            thumb: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            url: item.link,
          };
        });
        setVideos(items);
      } catch (e) {
        console.error('Erro ao buscar playlist:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#888', fontSize: '0.85rem' }}>
      Carregando...
    </div>
  );

  if (videos.length === 0) return (
    <div style={{ color: '#888', fontSize: '0.85rem' }}>Nenhum vídeo encontrado.</div>
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      overflowY: 'auto',
      maxHeight: '100%',
      paddingRight: '4px',
    }}>
      {videos.map((v) => (
        <a
          key={v.id}
          href={v.url}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            textDecoration: 'none',
            flexShrink: 0,
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src={v.thumb}
            alt={v.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{
            background: '#fff',
            padding: '0.4rem 0.5rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#1a1a1a',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {v.title}
          </div>
        </a>
      ))}
    </div>
  );
};

const QuemSomosSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2px 1fr',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* Coluna esquerda — texto */}
          <div>
            <h2 style={{ fontFamily: 'Cambria, serif', fontSize: '1.875rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Quem Somos
            </h2>
            <p style={{ fontFamily: 'Cambria, serif', fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.7, textAlign: 'justify' }}>
              O Observatório de Indicadores Culturais e Inovação em Dados (ObIC) é uma gerência dedicada da
              Secretaria de Cultura de Pernambuco (SECULT-PE) à pesquisa, monitoramento e coleta sistemática
              de dados da cultura do estado.
            </p>
            <p style={{ fontFamily: 'Cambria, serif', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.7, textAlign: 'justify' }}>
              Com um enfoque particular no acompanhamento dos estudos relacionados às políticas culturais
              desenvolvidas pela SECULT-PE, o Observatório desenvolve e analisa indicadores culturais,
              transformando números em informações para a tomada de decisão estratégica.
            </p>
            <Button size="lg" asChild>
              <Link to="/quem-somos">
                Saiba Mais
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Linha divisória vertical */}
          <div style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '2px', alignSelf: 'stretch' }} />

          {/* Coluna direita — título + vídeo + playlist */}
          <div>
            <h2 style={{ fontFamily: 'Cambria, serif', fontSize: '1.875rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Vídeos
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '0.75rem', alignItems: 'start' }}>

              {/* Vídeo principal */}
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Vídeo ObIC"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Playlist com scroll */}
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <PlaylistSidebar />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;