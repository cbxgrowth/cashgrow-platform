
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Usuária Premium",
    content: "Já economizei mais de R$ 2.000 este ano apenas fazendo compras normalmente. O sistema de missões é viciante!",
    rating: 5,
    savings: "R$ 2.150"
  },
  {
    name: "Carlos Mendes",
    role: "Membro VIP",
    content: "As recomendações da IA são impressionantes. Sempre me mostram as melhores ofertas antes de todo mundo.",
    rating: 5,
    savings: "R$ 1.890"
  },
  {
    name: "Marina Costa",
    role: "Usuária desde 2022",
    content: "O clube VIP vale cada centavo. O cashback premium e o suporte são excepcionais.",
    rating: 5,
    savings: "R$ 3.200"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de quem já está economizando
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    {testimonial.savings}
                  </Badge>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
