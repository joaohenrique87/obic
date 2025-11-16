import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Auxiliar a cultura pernambucana através de dados e informações que promovam e apoiem as ações dos agentes culturais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-medium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Auxiliar a cultura pernambucana através de dados que promovam o desenvolvimento cultural
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-medium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Institucionalizar o monitoramento de dados para uma gestão orientada até 2026
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-medium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Transparência, ética, inovação e integridade em todas as nossas ações
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-medium">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Objetivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Criar uma cultura de dados e ampliar o acesso às informações culturais em Pernambuco
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quem Somos
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  O Observatório de Indicadores Culturais e Inovação em Dados (ObIC) é uma gerência dedicada da 
                  Secretaria de Cultura de Pernambuco (SECULT-PE) à pesquisa, monitoramento e coleta sistemática 
                  de dados da cultura do estado.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Explore Nossos Dados e Pesquisas
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Acesse relatórios, dashboards e pesquisas sobre a cultura em Pernambuco
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/relatorios">Ver Relatórios</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link to="/pesquisas">Conhecer Pesquisas</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
