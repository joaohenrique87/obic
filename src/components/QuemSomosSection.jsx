import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// 🔧 SUBSTITUA pelo ID do canal: vá em youtube.com/@ObIC-PE → About → Share channel
// O ID começa com "UC", ex: UCxxxxxxxxxxxxxxxxxxxxxxxx
const CHANNEL_ID = "UCizQszD9Xn6GGWZoD6987wQ";
const VIDEO_ID = "80EcQHpFv6Y";

const QuemSomosSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Coluna esquerda — texto */}
          <div>
            <h2 className="text-3xl font-['Cambria'] md:text-3xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            <p className="text-lg font-['Cambria'] mb-4 leading-relaxed">
              O Observatório de Indicadores Culturais e Inovação em Dados (ObIC) é uma gerência dedicada da
              Secretaria de Cultura de Pernambuco (SECULT-PE) à pesquisa, monitoramento e coleta sistemática
              de dados da cultura do estado.
            </p>
            <p className="text-lg font-['Cambria'] mb-6 leading-relaxed">
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
          <div className="flex flex-col gap-4">

            {/* Vídeo principal */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Vídeo ObIC"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Playlist do canal */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height: '220px' }}>
              <iframe
                src={`https://www.youtube.com/embed?listType=user_uploads&list=${CHANNEL_ID}&layout=gallery`}
                title="Playlist ObIC"
                className="w-full h-full"
                frameBorder="0"
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