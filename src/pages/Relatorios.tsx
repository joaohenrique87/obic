import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PDFList from "@/components/PDFList";

/**
 * PÁGINA DE RELATÓRIOS
 * 
 * Como melhorar:
 * 1. URLs dos dashboards: Substitua as URLs de exemplo pelos seus dashboards reais (Power BI, Looker Studio, etc.)
 * 2. PDFs: Use o componente PDFList abaixo para adicionar seus relatórios em PDF
 * 3. Abas: Adicione mais TabsTrigger para categorias adicionais de relatórios
 * 4. Descrições: Personalize os textos descritivos de cada relatório
 */
const Relatorios = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-12">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Relatórios</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Acesse dados e análises sobre políticas culturais através de nossos dashboards interativos e relatórios em PDF
          </p>
        </div>

        {/* Sistema de Abas para diferentes categorias de relatórios */}
        <Tabs defaultValue="lab" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lab">Lei Aldir Blanc</TabsTrigger>
            <TabsTrigger value="lpg">Lei Paulo Gustavo</TabsTrigger>
            <TabsTrigger value="pnab">PNAB</TabsTrigger>
          </TabsList>

          {/* RELATÓRIO: LEI ALDIR BLANC */}
          <TabsContent value="lab" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard - Lei Aldir Blanc 2020/2021</CardTitle>
                <CardDescription>
                  Visualização interativa dos dados da execução da Lei Aldir Blanc
                  {/* COMO MELHORAR: Adicione uma descrição mais detalhada sobre o que o dashboard mostra */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 
                  EMBED DO DASHBOARD
                  Como configurar:
                  1. Substitua a URL de 'src' abaixo pela URL do seu dashboard real
                  2. Para Power BI: Use o link de compartilhamento público ou embed
                  3. Para Looker Studio: Use a opção "Incorporar" e copie o iframe
                  4. Ajuste height conforme necessário
                */}
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://exemplo-dashboard-lab.com/embed"
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: '600px' }}
                    frameBorder="0"
                    allowFullScreen
                    title="Dashboard Lei Aldir Blanc"
                  />
                  {/* Placeholder - remova este texto quando adicionar o dashboard real */}
                  <p className="text-muted-foreground absolute">
                    Dashboard será exibido aqui - configure a URL no código
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lista de PDFs relacionados */}
            <PDFList 
              category="lab"
              title="Relatórios em PDF - Lei Aldir Blanc"
            />
          </TabsContent>

          {/* RELATÓRIO: LEI PAULO GUSTAVO */}
          <TabsContent value="lpg" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard - Lei Paulo Gustavo 2023</CardTitle>
                <CardDescription>
                  Acompanhe a implementação e resultados da Lei Paulo Gustavo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://exemplo-dashboard-lpg.com/embed"
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: '600px' }}
                    frameBorder="0"
                    allowFullScreen
                    title="Dashboard Lei Paulo Gustavo"
                  />
                  <p className="text-muted-foreground absolute">
                    Dashboard será exibido aqui - configure a URL no código
                  </p>
                </div>
              </CardContent>
            </Card>

            <PDFList 
              category="lpg"
              title="Relatórios em PDF - Lei Paulo Gustavo"
            />
          </TabsContent>

          {/* RELATÓRIO: PNAB */}
          <TabsContent value="pnab" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard - PNAB 2024-2028</CardTitle>
                <CardDescription>
                  Dados e indicadores do Plano Nacional Aldir Blanc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://exemplo-dashboard-pnab.com/embed"
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: '600px' }}
                    frameBorder="0"
                    allowFullScreen
                    title="Dashboard PNAB"
                  />
                  <p className="text-muted-foreground absolute">
                    Dashboard será exibido aqui - configure a URL no código
                  </p>
                </div>
              </CardContent>
            </Card>

            <PDFList 
              category="pnab"
              title="Relatórios em PDF - PNAB"
            />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Relatorios;
