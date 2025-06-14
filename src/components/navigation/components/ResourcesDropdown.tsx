
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { resourcesLinks } from '../data/navigationData';

const ResourcesDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-10 rounded-lg bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-accent/20 data-[state=open]:bg-accent/20">
        Recursos
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[450px] bg-background border border-border/40 rounded-xl shadow-lg backdrop-blur-sm">
          <div className="space-y-1">
            {resourcesLinks.map((item) => (
              <NavigationMenuLink key={item.title} asChild>
                <Link
                  to={item.href}
                  className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/20 hover:text-accent-foreground focus:bg-accent/20 focus:text-accent-foreground group border border-transparent hover:border-border/20"
                >
                  <div className="flex items-center gap-3 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                    <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    {item.title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesDropdown;
