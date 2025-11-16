import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Manuella Oliveira",
    role: "Gerente",
    bio: "Bacharela em Relações Internacionais pela Universidade Católica de Pernambuco (UNICAP). Mestre em Ciência Política pela Universidade Federal de Pernambuco (UFPE). Tem interesse em políticas públicas, métodos de pesquisa e cultura. Integra o Observatório desde setembro de 2021.",
    initials: "MO"
  },
  {
    name: "Caio Rios",
    role: "Analista de dados e Pesquisador",
    bio: "Doutor, Mestre e Bacharel em Ciência Política pela Universidade Federal de Pernambuco. Tem interesse em análise de dados, inferência causal, pão com fermentação natural e basquete. Integra o Observatório desde agosto de 2021.",
    initials: "CR"
  },
  {
    name: "Danillo Rafael",
    role: "Analista de dados e Pesquisador",
    bio: "Doutorando e Mestre em Ciência Política pela Universidade Federal de Pernambuco, Bacharel em Relações Internacionais. Tem interesse em políticas públicas, análise de dados, métodos de pesquisa, café e death metal. Integra o Observatório desde julho de 2022.",
    initials: "DR"
  },
  {
    name: "Liliane Gobetti",
    role: "Analista de dados e Pesquisador",
    bio: "Bacharela em Ciências Sociais pela Universidade Federal do Rio Grande do Sul (UFRGS). Mestre em Ciência Política pela Universidade Federal de Pernambuco (UFPE) e atualmente doutorando em Ciência Política pela mesma universidade. Integra o ObIC desde setembro de 2023.",
    initials: "LG"
  },
  {
    name: "João Henrique",
    role: "Analista de dados e Pesquisador",
    bio: "Graduando em Análise de Desenvolvimento de Sistema - SENAC. Integra o Observatório desde Julho de 2024.",
    initials: "JH"
  }
];

const Equipe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Nossa Equipe
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Conheça os profissionais que transformam dados em informações para a cultura de Pernambuco
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-medium">
                  <CardHeader className="text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 bg-gradient-primary">
                      <AvatarFallback className="text-2xl font-bold text-primary-foreground bg-transparent">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Equipe;
