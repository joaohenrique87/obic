import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">O</span>
              </div>
              <span className="text-lg font-bold text-foreground">ObIC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Observatório de Indicadores Culturais e Inovação em Dados
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/quem-somos" className="text-muted-foreground hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link to="/relatorios" className="text-muted-foreground hover:text-primary transition-colors">
                  Relatórios
                </Link>
              </li>
              <li>
                <Link to="/pesquisas" className="text-muted-foreground hover:text-primary transition-colors">
                  Pesquisas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Secretaria de Cultura de Pernambuco</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contato@obic.pe.gov.br" className="hover:text-primary transition-colors">
                  contato@obic.pe.gov.br
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/obic/"
              target="_blank"
               className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} ObIC - Observatório de Indicadores Culturais. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
