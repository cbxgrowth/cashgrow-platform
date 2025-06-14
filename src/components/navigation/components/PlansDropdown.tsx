
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { planSections } from '../data/navigationData';

const PlansDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-10 rounded-lg bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/20 data-[state=open]:bg-accent/20">
        Planos
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-6 p-6 w-[500px] grid-cols-2 bg-background border border-border/40 rounded-xl shadow-lg backdrop-blur-sm">
          <div className="space-y-4">
            <h4 className="text-sm font-semibold leading-none text-primary flex items-center gap-2 pb-2 border-b border-border/30">
              <planSections.personal.icon className="h-4 w-4" />
              Planos Pessoais
            </h4>
            <NavigationMenuLink asChild>
              <Link
                to={planSections.personal.href}
                className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground group border border-transparent hover:border-border/20"
              >
                <div className="flex items-center gap-3 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                  <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <planSections.personal.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  Consumidor
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                  {planSections.personal.description}
                </p>
              </Link>
            </NavigationMenuLink>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold leading-none text-primary flex items-center gap-2 pb-2 border-b border-border/30">
              <planSections.business.icon className="h-4 w-4" />
              Planos Empresariais
            </h4>
            <NavigationMenuLink asChild>
              <Link
                to={planSections.business.href}
                className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground group border border-transparent hover:border-border/20"
              >
                <div className="flex items-center gap-3 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                  <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <planSections.business.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  Empresas
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                  {planSections.business.description}
                </p>
              </Link>
            </NavigationMenuLink>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default PlansDropdown;
