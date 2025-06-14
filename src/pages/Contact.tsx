
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Users,
  Building2,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Globe,
  Headphones,
  Calendar
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    type: 'geral'
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@cbxgrowth.com",
      description: "Resposta em até 24 horas",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (88) 9 9999-9999",
      description: "Seg a Sex, 8h às 18h",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Doutor Possidonio Bem, 371, Sala 05 CXPST 24",
      description: "Lagoa Seca, Juazeiro do Norte-CE, CEP 63040-300",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta, 8h às 18h",
      description: "Sábados, 8h às 12h",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  const contactTypes = [
    {
      id: 'geral',
      title: 'Informações Gerais',
      description: 'Dúvidas sobre nossos serviços',
      icon: MessageSquare
    },
    {
      id: 'vendas',
      title: 'Vendas',
      description: 'Interessado em nossos planos',
      icon: Building2
    },
    {
      id: 'suporte',
      title: 'Suporte Técnico',
      description: 'Problemas técnicos ou bugs',
      icon: Headphones
    },
    {
      id: 'parceria',
      title: 'Parcerias',
      description: 'Propostas de negócio',
      icon: Users
    }
  ];

  const benefits = [
    "Resposta garantida em 24 horas",
    "Suporte especializado por área",
    "Demonstração personalizada",
    "Consultoria gratuita",
    "Implementação assistida"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="animate-fade-in bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Entre em Contato
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in-up">
              Vamos{" "}
              <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Conversar
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Estamos aqui para ajudar você a transformar seu negócio ou otimizar suas compras. 
              Fale conosco e descubra como podemos trabalhar juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="text-center hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium text-foreground">{info.info}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Send className="w-6 h-6 text-primary" />
                    Envie sua Mensagem
                  </CardTitle>
                  <CardDescription className="text-base">
                    Preencha o formulário abaixo e retornaremos em breve
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Type Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Tipo de Contato</label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactTypes.map((type) => (
                        <div
                          key={type.id}
                          onClick={() => setFormData({ ...formData, type: type.id })}
                          className={`p-3 rounded-lg border-2 cursor-pointer transition-all hover-scale ${
                            formData.type === type.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <type.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{type.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Nome Completo</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                          className="input-enhanced"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                          className="input-enhanced"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Empresa (opcional)</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da empresa"
                          className="input-enhanced"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Telefone</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(88) 9 9999-9999"
                          className="input-enhanced"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Assunto</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Resumo do que você gostaria de discutir"
                        required
                        className="input-enhanced"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Mensagem</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva sua solicitação em detalhes..."
                        rows={5}
                        required
                        className="input-enhanced resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hover-scale">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits and Additional Info */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              {/* Why Contact Us */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Por que nos Contactar?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Schedule a Demo */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Agende uma Demonstração
                  </CardTitle>
                  <CardDescription>
                    Veja nossa plataforma em ação com uma demo personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Nossa equipe de especialistas pode mostrar como nossa solução se adapta 
                    perfeitamente às suas necessidades específicas.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Demo personalizada (30-45 min)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Análise das suas necessidades
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Proposta customizada
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full hover-scale">
                    Agendar Demo Grátis
                  </Button>
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    Perguntas Frequentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-medium">Como funciona o cashback?</h4>
                    <p className="text-sm text-muted-foreground">
                      O cashback é calculado automaticamente sobre compras qualificadas e creditado na sua carteira digital.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Posso integrar com meu sistema atual?</h4>
                    <p className="text-sm text-muted-foreground">
                      Sim, nossa API permite integração com qualquer sistema existente de forma simples e segura.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Existe período de teste?</h4>
                    <p className="text-sm text-muted-foreground">
                      Oferecemos 14 dias grátis para todos os planos pagos, sem compromisso.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa <span className="text-primary">Localização</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos localizados no coração de Juazeiro do Norte, prontos para atender você.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto border-0 shadow-xl animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">CBX Growth</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Rua Doutor Possidonio Bem, 371</p>
                        <p className="text-muted-foreground">Sala 05 CXPST 24</p>
                        <p className="text-muted-foreground">Lagoa Seca, Juazeiro do Norte-CE</p>
                        <p className="text-muted-foreground">CEP: 63040-300</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+55 (88) 9 9999-9999</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>contato@cbxgrowth.com</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">Mapa interativo em breve</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Não espere mais para transformar seu negócio ou começar a economizar. 
              Fale conosco hoje mesmo e descubra todas as possibilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" className="hover-scale shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Começar Agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="hover-scale border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
