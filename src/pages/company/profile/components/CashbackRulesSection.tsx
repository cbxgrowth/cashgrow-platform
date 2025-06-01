
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag, Plus } from "lucide-react";

const CashbackRulesSection: React.FC = () => {
  const categories = [
    { name: "Eletrônicos", default: "5%", promo: "8%", active: true },
    { name: "Moda", default: "7%", promo: "12%", active: true },
    { name: "Casa e Decoração", default: "6%", promo: "10%", active: true },
    { name: "Beleza", default: "8%", promo: "15%", active: true },
    { name: "Esportes", default: "6%", promo: "10%", active: false }
  ];

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
      <h3 className="text-lg font-medium flex items-center gap-2">
        <Tag className="h-5 w-5 text-accent" />
        Regras de Cashback para Categorias
      </h3>
      
      <div className="space-y-4">
        <div className="rounded-md border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Categoria</th>
                <th className="p-3 text-center font-medium">Cashback Padrão</th>
                <th className="p-3 text-center font-medium">Cashback em Promoção</th>
                <th className="p-3 text-center font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, idx) => (
                <tr key={idx} className="border-b hover:bg-muted/30">
                  <td className="p-3">{category.name}</td>
                  <td className="p-3">
                    <div className="flex justify-center">
                      <div className="relative w-20">
                        <Input 
                          type="text" 
                          defaultValue={category.default}
                          className="text-center h-8 py-1" 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center">
                      <div className="relative w-20">
                        <Input 
                          type="text" 
                          defaultValue={category.promo}
                          className="text-center h-8 py-1" 
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex justify-center">
                      <input type="checkbox" defaultChecked={category.active} className="w-4 h-4 accent-primary" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" /> Adicionar Categoria
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CashbackRulesSection;
