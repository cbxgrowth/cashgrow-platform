import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/navigation/list-item";
import { Users, Building2, BarChart3, Crown } from "lucide-react";

export const PlansDropdown = () => {
  const plansItems = [
    {
      title: "Planos Pessoais",
      href: "/pricing/consumer",
      description: "Para consumidores que querem economizar",
      icon: Users
    },
    {
      title: "Planos Empresariais", 
      href: "/pricing/enterprise",
      description: "Soluções completas para empresas",
      icon: Building2
    },
    {
      title: "Comparar Todos",
      href: "/pricing",
      description: "Compare todos os planos disponíveis",
      icon: BarChart3
    }
  ];

  return (
    <NavigationMenuContent>
      <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
        <div className="row-span-3">
          <NavigationMenuLink asChild>
            <a
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
              href="/pricing"
            >
              <Crown className="h-6 w-6 text-white" />
              <div className="mb-2 mt-4 text-lg font-medium text-white">
                Planos CBX Growth
              </div>
              <p className="text-sm leading-tight text-white/90">
                Escolha o plano ideal para maximizar seus ganhos ou fidelizar seus clientes.
              </p>
            </a>
          </NavigationMenuLink>
        </div>
        {plansItems.map((item) => (
          <ListItem
            key={item.title}
            title={item.title}
            href={item.href}
            icon={item.icon}
          >
            {item.description}
          </ListItem>
        ))}
      </div>
    </NavigationMenuContent>
  );
};
