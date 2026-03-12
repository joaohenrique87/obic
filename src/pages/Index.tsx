import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";
import CarrosselRelatorio from '@/CarrosselRelatorio.jsx';


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-['Cambria'] md:text-3xl font-bold text-foreground mb-6">
                  Quem Somos
                </h2>
                <p className="text-lg font-['Cambria'] mb-1 leading-relaxed text-justify">
                  O Observatório de Indicadores Culturais e Inovação em Dados (ObIC) é uma gerência dedicada da
                  Secretaria de Cultura de Pernambuco (SECULT-PE) à pesquisa, monitoramento e coleta sistemática
                  de dados da cultura do estado.
                </p>
                <p className="text-lg font-['Cambria'] mb-3 leading-relaxed text-justify">
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
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-primary opacity-20 absolute inset-0 blur-3xl"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-large border border-border">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary flex-shrink-0 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Coleta de Dados</h3>
                        <p className="text-sm text-muted-foreground">
                          Monitoramento sistemático de dados culturais
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-secondary flex-shrink-0 flex items-center justify-center">
                        <span className="text-secondary-foreground font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Análise</h3>
                        <p className="text-sm text-muted-foreground">
                          Transformação de números em informações estratégicas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary flex-shrink-0 flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Decisão</h3>
                        <p className="text-sm text-muted-foreground">
                          Apoio à formulação de políticas públicas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="py-20 bg-background">
          <div className="max-w-[1600px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dashboards
              </h2>
              <p className="text-lg font-['Cambria'] text-muted-foreground max-w-2xl mx-auto">
                Consulte abaixo os nossos Dashboards, onde você vai encontrar os resultados das leis analisadas por nós.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              <a href="/relatorios?tab=PNAB"
                className="group relative block overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg w-full md:w-[calc(33.333%-1rem)]"
                target="">
                <img src="src/assets/pnab.png" alt="Dashboard PNAB" className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-500" />
              </a>
              <a href="/relatorios"
                className="group relative block overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg w-full md:w-[calc(33.333%-1rem)]"
                target="">
                <img src="src/assets/lpg.jpeg" alt="Dashboard LPG" className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-500" />
              </a>
              <a href="/relatorios"
                className="group relative block overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg w-full md:w-[calc(33.333%-1rem)]"
                target="">
                <img src="src/assets/rouanet.png" alt="Dashboard Lei Rouanet em Pernambuco" className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-500" />
              </a>
              <a href="htpps://www.globo.com"
                className="group relative block overflow-hidden rounded-2xl border-2 border-transparent hover:border-primary transition-all duration-500 shadow-lg w-full md:w-[calc(33.333%-1rem)]"
                target="">
                <img src="src/assets/rouanet.png" alt="Dashboard Lei Rouanet em Pernambuco" className="w-full h-auto object-cover group-hover:scale-[1.05] transition-transform duration-500" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Explore Nossos Relatórios
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <CarrosselRelatorio />
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
