
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Sobre o Sistema de Cashback</h1>
          <p className="text-xl text-muted-foreground">
            Conectando empresas e clientes através de um programa de recompensas inteligente.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Nossa Missão</CardTitle>
            <CardDescription>
              Transformando a relação entre empresas e consumidores.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Nosso sistema de cashback foi desenvolvido para criar uma relação ganha-ganha entre empresas e consumidores. 
              Enquanto os clientes economizam em suas compras através do cashback, as empresas aumentam sua fidelização de clientes 
              e obtêm insights valiosos sobre o comportamento de consumo.
            </p>
            <p>
              Utilizando tecnologias modernas e análise de dados avançada, nossa plataforma permite que empresas 
              de todos os portes implementem programas de cashback personalizados e eficientes, aumentando a satisfação 
              dos clientes e impulsionando suas vendas.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Para Empresas</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Aumente a fidelidade do cliente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Obtenha insights valiosos sobre consumo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Campanhas personalizadas com IA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Aumente o ticket médio</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Para Clientes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Economize em cada compra</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Receba recomendações personalizadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Participe de missões e desafios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Acesse o clube VIP para benefícios exclusivos</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nossa História</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Fundada em 2024, nossa empresa nasceu da percepção de que os programas de fidelidade tradicionais 
              não estavam atendendo adequadamente às necessidades das empresas modernas e seus clientes.
            </p>
            <p>
              Com uma equipe de especialistas em tecnologia, marketing e experiência do cliente, 
              desenvolvemos uma plataforma que revoluciona a maneira como as recompensas são oferecidas e utilizadas.
            </p>
            <p>
              Hoje, atendemos empresas de diversos segmentos e milhares de clientes que aproveitam 
              diariamente os benefícios do nosso sistema de cashback inteligente.
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-4">
          <Button asChild size="lg">
            <Link to="/auth/register">Comece agora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
