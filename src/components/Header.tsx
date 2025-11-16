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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">O</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-foreground">ObIC</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Observatório de Indicadores Culturais</span>
          </div>
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
                <NavigationMenuTrigger>Relatórios</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <li>
                      <Link to="/relatorios/lab" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Lei Aldir Blanc</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">2020/2021</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/relatorios/lpg" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Lei Paulo Gustavo</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">2023</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/relatorios/pnab" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">PNAB</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">2024-2028</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
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
