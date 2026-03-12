import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/secultobic.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-5">
          <img
            src={logo}
            alt="ObIC - Observatório de Indicadores Culturais"
            className="h-20 w-50 bg-transparent hover:scale-150 transition-transform"

          />

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link to="/quem-somos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Quem Somos</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conheça nossa história e missão
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/equipe" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Equipe</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conheça nossos profissionais
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/relatorios" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Relatórios
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/pesquisas" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Pesquisas
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/cultura-em-numeros" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Cultura em Números
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="default" className="ml-4" asChild>
            <Link to="/contato">Contato</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/quem-somos" className="text-foreground hover:text-primary transition-colors">Quem Somos</Link>
            <Link to="/equipe" className="text-foreground hover:text-primary transition-colors">Equipe</Link>
            {/* EDITE: Adicione ou remova links conforme necessário */}
            <Link to="/relatorios" className="text-foreground hover:text-primary transition-colors">Relatórios</Link>
            <Link to="/pesquisas" className="text-foreground hover:text-primary transition-colors">Pesquisas</Link>
            <Link to="/cultura-em-numeros" className="text-foreground hover:text-primary transition-colors">Cultura em Números</Link>
            <Button asChild className="w-full">
              <Link to="/contato">Contato</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
