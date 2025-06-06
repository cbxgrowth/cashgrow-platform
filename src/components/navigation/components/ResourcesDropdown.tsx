
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { resources } from '../data/navigationData';

const ResourcesDropdown = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="h-10">Recursos</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[400px]">
          {resources.map((item) => (
            <NavigationMenuLink key={item.title} asChild>
              <Link
                to={item.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
              >
                <div className="flex items-center gap-2 text-sm font-medium leading-none group-hover:text-primary transition-colors">
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ResourcesDropdown;
