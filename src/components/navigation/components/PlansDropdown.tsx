
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
      <NavigationMenuTrigger className="h-10">Planos</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
              <planSections.personal.icon className="h-4 w-4" />
              Planos Pessoais
            </h4>
            <NavigationMenuLink asChild>
              <Link
                to={planSections.personal.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium leading-none">Consumidor</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {planSections.personal.description}
                </p>
              </Link>
            </NavigationMenuLink>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium leading-none text-primary flex items-center gap-2">
              <planSections.business.icon className="h-4 w-4" />
              Planos Empresariais
            </h4>
            <NavigationMenuLink asChild>
              <Link
                to={planSections.business.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium leading-none">Empresas</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
