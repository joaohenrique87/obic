import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const VIDEO_ID = "80EcQHpFv6Y";
const PLAYLIST_ID = "PLJDWpFL5ny_ooRDdzxZp13tFuJPb35Ih7";

const QuemSomosSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          {/* Coluna esquerda — texto */}
          <div>
            <h2 style={{ fontFamily: 'Cambria, serif', fontSize: '1.875rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Quem Somos
            </h2>
            <p style={{ fontFamily: 'Cambria, serif', fontSize: '1.125rem', marginBottom: '1rem', lineHeight: 1.7 , textAlign: 'justify'}}>
              O Observatório de Indicadores Culturais e Inovação em Dados (ObIC) é uma gerência dedicada da
              Secretaria de Cultura de Pernambuco (SECULT-PE) à pesquisa, monitoramento e coleta sistemática
              de dados da cultura do estado.
            </p>
            <p style={{ fontFamily: 'Cambria, serif', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: 1.7 , textAlign: 'justify'}}>
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

          {/* Coluna direita — vídeo + playlist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

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

            {/* Playlist */}
            <div style={{
              position: 'relative',
              paddingBottom: '45%',
              height: 0,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}>
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                title="Playlist ObIC"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;