import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * PÁGINA CULTURA EM NÚMEROS
 * 
 * Como melhorar:
 * 1. Adicione dashboards de estatísticas culturais
 * 2. Integre com APIs de dados culturais (IBGE, MinC, etc.)
 * 3. Crie visualizações interativas com bibliotecas como Recharts
 * 4. Adicione filtros por região, período, segmento cultural
 */
const CulturaEmNumeros = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cultura em Números</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Indicadores e estatísticas sobre o setor cultural brasileiro
          </p>
        </div>

        {/* 
          CARDS DE ESTATÍSTICAS
          Como personalizar:
          1. Substitua os valores pelos indicadores reais
          2. Adicione mais cards conforme necessário
          3. Considere usar ícones do lucide-react para cada indicador
        */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">X.XXX</CardTitle>
              <CardDescription>Equipamentos Culturais</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">R$ X,X bi</CardTitle>
              <CardDescription>Investimento em Cultura</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">XXX mil</CardTitle>
              <CardDescription>Profissionais do Setor</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary">X.XXX</CardTitle>
              <CardDescription>Municípios Atendidos</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* 
          DASHBOARD PRINCIPAL
          Como configurar:
          1. Substitua a URL pelo seu dashboard de dados culturais
          2. Pode ser Power BI, Looker Studio, Tableau, etc.
          3. Ajuste o height conforme necessário
        */}
        <Card>
          <CardHeader>
            <CardTitle>Painel de Indicadores Culturais</CardTitle>
            <CardDescription>
              Visualização interativa de dados sobre cultura no Brasil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-lg flex items-center justify-center" style={{ minHeight: '700px' }}>
              <iframe
                src="https://exemplo-dashboard-cultura.com/embed"
                className="w-full h-full rounded-lg"
                style={{ minHeight: '700px' }}
                frameBorder="0"
                allowFullScreen
                title="Dashboard Cultura em Números"
              />
              {/* Placeholder - remova este texto quando adicionar o dashboard real */}
              <p className="text-muted-foreground absolute">
                Dashboard de indicadores culturais será exibido aqui - configure a URL no código
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CulturaEmNumeros;
