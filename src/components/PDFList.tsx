import { useState } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * COMPONENTE DE LISTA DE PDFs COM HOVER
 * 
 * Como usar e melhorar:
 * 1. ADICIONAR PDFs: Edite o array 'pdfData' abaixo com seus arquivos reais
 * 2. UPLOAD: Coloque seus PDFs na pasta 'public/pdfs/' do projeto
 * 3. CATEGORIAS: Use a prop 'category' para filtrar PDFs por seção
 * 4. VISUALIZAÇÃO: O botão "Visualizar" abre o PDF em nova aba
 * 5. DOWNLOAD: O botão "Download" baixa o arquivo diretamente
 * 
 * Estrutura de dados:
 * - id: identificador único
 * - title: nome do relatório
 * - category: lab, lpg, pnab, pesquisas, etc.
 * - year: ano de publicação
 * - fileName: nome do arquivo na pasta public/pdfs/
 * - size: tamanho do arquivo (opcional)
 */

interface PDFItem {
  id: number;
  title: string;
  category: string;
  year: string;
  fileName: string;
  size?: string;
}

/**
 * EDITE ESTE ARRAY COM SEUS PDFs REAIS
 * Exemplo de como adicionar:
 * {
 *   id: 1,
 *   title: "Relatório Final Lei Aldir Blanc 2020",
 *   category: "lab",
 *   year: "2020",
 *   fileName: "relatorio-lab-2020.pdf",
 *   size: "2.5 MB"
 * }
 */
const pdfData: PDFItem[] = [
  {
    id: 1,
    title: "Relatório Exemplo - Lei Aldir Blanc",
    category: "lab",
    year: "2021",
    fileName: "exemplo.pdf",
    size: "1.2 MB"
  },
  {
    id: 2,
    title: "Relatório Exemplo - Lei Paulo Gustavo",
    category: "lpg",
    year: "2023",
    fileName: "exemplo.pdf",
    size: "1.8 MB"
  },
  {
    id: 3,
    title: "Pesquisa Exemplo sobre Cultura",
    category: "pesquisas",
    year: "2024",
    fileName: "exemplo.pdf",
    size: "3.2 MB"
  },
  // ADICIONE MAIS PDFs AQUI seguindo o mesmo padrão
];

interface PDFListProps {
  category: string;
  title?: string;
}

const PDFList = ({ category, title }: PDFListProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  
  const filteredPDFs = pdfData.filter(pdf => pdf.category === category);

  /**
   * Função para visualizar PDF em nova aba  
   */
  const handleView = (fileName: string) => {
    window.open(`/pdfs/${fileName}`, '_blank');
  };

  /**
   * Função para fazer download do PDF
   */
  const handleDownload = (fileName: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`;
    link.download = fileName;
    link.click();
  };

  if (filteredPDFs.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            Nenhum PDF disponível nesta categoria ainda.
            {/* INSTRUÇÃO: Adicione PDFs no array 'pdfData' acima */}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPDFs.map((pdf) => (
          <Card
            key={pdf.id}
            className="relative overflow-hidden transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setHoveredId(pdf.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
                    {pdf.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pdf.year} {pdf.size && `• ${pdf.size}`}
                  </p>
                </div>
              </div>

              {/* 
                BOTÕES DE AÇÃO (aparecem no hover)
                Customização:
                - Mude cores alterando variant do Button
                - Adicione mais ações se necessário
              */}
              <div
                className={`absolute inset-0 bg-background/95 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredId === pdf.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleView(pdf.fileName)}
                  className="gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Visualizar
                </Button>
                
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDownload(pdf.fileName, pdf.title)}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 
        INSTRUÇÕES DE USO:
        
        1. ADICIONAR SEUS PDFs:
           - Coloque os arquivos PDF na pasta 'public/pdfs/'
           - Edite o array 'pdfData' no topo deste arquivo
           - Adicione título, categoria, ano e nome do arquivo
        
        2. ORGANIZAÇÃO POR PASTAS (opcional):
           - Você pode criar subpastas: public/pdfs/lab/, public/pdfs/lpg/, etc.
           - Atualize o caminho em handleView e handleDownload: `/pdfs/lab/${fileName}`
        
        3. INTEGRAÇÃO COM BACKEND (futuro):
           - Para upload dinâmico, você precisará do Lovable Cloud
           - Isso permitirá fazer upload direto pela interface
           - Os PDFs serão salvos no Supabase Storage
      */}
    </div>
  );
};

export default PDFList;
