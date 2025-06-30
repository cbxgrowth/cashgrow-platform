import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Video, MessageCircle, Phone, Mail, FileText, Settings, CreditCard, Shield, Users, Zap, ArrowRight, ExternalLink, Star } from "lucide-react";
const Help = () => {
  const popularTopics = [{
    icon: CreditCard,
    title: "Como receber cashback",
    description: "Aprenda como ganhar e resgatar suas recompensas",
    articles: 15,
    category: "Cashback"
  }, {
    icon: Settings,
    title: "Configurações da conta",
    description: "Gerencie seu perfil e preferências",
    articles: 8,
    category: "Conta"
  }, {
    icon: Shield,
    title: "Segurança e privacidade",
    description: "Proteja sua conta e dados pessoais",
    articles: 12,
    category: "Segurança"
  }, {
    icon: Users,
    title: "Programa de indicação",
    description: "Ganhe mais indicando amigos",
    articles: 6,
    category: "Indicação"
  }];
  const supportOptions = [{
    icon: MessageCircle,
    title: "Chat ao Vivo",
    description: "Fale conosco em tempo real",
    availability: "24/7",
    action: "Iniciar Chat"
  }, {
    icon: Mail,
    title: "Email",
    description: "Envie sua dúvida por email",
    availability: "Resposta em 2h",
    action: "Enviar Email"
  }, {
    icon: Phone,
    title: "Telefone",
    description: "Ligue para nosso suporte",
    availability: "Seg-Sex 8h-18h",
    action: "Ver Número"
  }];
  const quickLinks = ["Como funciona o cashback", "Primeiros passos", "Política de reembolso", "Termos de uso", "Política de privacidade", "FAQ - Perguntas frequentes"];
  return <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <BookOpen className="w-4 h-4 mr-2" />
            Central de Ajuda
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como podemos <span className="text-primary">ajudar</span> você?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Encontre respostas rápidas, tutoriais detalhados e entre em contato com nosso suporte especializado.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input placeholder="Pesquisar artigos, tutoriais..." className="pl-12 h-14 text-lg border-2 focus:border-primary" />
            <Button className="absolute right-2 top-2 h-10">
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tópicos mais acessados
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{topic.articles} artigos</Badge>
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between">
                    Ver artigos
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Precisa de ajuda personalizada?
            </h2>
            <p className="text-xl text-muted-foreground">
              Nossa equipe está pronta para ajudar você
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                  <Badge className="mx-auto mt-2 bg-green-100 text-green-700">
                    {option.availability}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Links úteis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {quickLinks.map((link, index) => <Card key={index} className="hover:bg-accent/50 transition-colors cursor-pointer">
                <CardContent className="flex items-center justify-between p-4">
                  <span className="font-medium">{link}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Nossa equipe de suporte está sempre disponível para ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Falar com Suporte
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-purple-900">
              Sugerir Melhoria
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Help;