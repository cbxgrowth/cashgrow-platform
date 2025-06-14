
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SolutionsDropdown from './SolutionsDropdown';
import { PlansDropdown } from './PlansDropdown';
import ResourcesDropdown from './ResourcesDropdown';

const DesktopNavigation = () => {
  return (
    <div className="hidden lg:flex items-center">
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          <SolutionsDropdown />
          <PlansDropdown />
          <ResourcesDropdown />
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/about"
                className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"
              >
                <span className="relative z-10">Sobre</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                to="/contact"
                className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"
              >
                <span className="relative z-10">Contato</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNavigation;
