import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Database, FileText, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
              <Database className="h-4 w-4" />
              Gestão Orientada por Dados
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Observatório de Indicadores Culturais
          </h1>
          
          <p className="mb-8 text-lg text-white/90 md:text-xl max-w-2xl mx-auto">
            Transformando dados em informações para o desenvolvimento cultural de Pernambuco
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="shadow-large">
              <Link to="/quem-somos">
                Conheça o ObIC
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              <Link to="/cultura-em-numeros">
                <BarChart3 className="mr-2 h-5 w-5" />
                Cultura em Números
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">+100</h3>
            <p className="text-white/80">Relatórios Publicados</p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">+50k</h3>
            <p className="text-white/80">Dados Coletados</p>
          </div>
          
          <div className="text-center">
            <div className="mb-3 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">+20</h3>
            <p className="text-white/80">Pesquisas Realizadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
