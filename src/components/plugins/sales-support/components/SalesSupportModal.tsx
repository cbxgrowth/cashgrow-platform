
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar, 
  Star, 
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';

interface SalesSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SalesSupportModal: React.FC<SalesSupportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Sua mensagem foi enviada! Nossa equipe entrará em contato em breve.');
    setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
    onClose();
  };

  const salesFeatures = [
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Gestão de Clientes',
      description: 'Sistema completo para gerenciar sua base de clientes'
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: 'Cashback Inteligente',
      description: 'Configure regras personalizadas de cashback'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Analytics Avançado',
      description: 'Relatórios detalhados sobre performance'
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: 'Integração ERP',
      description: 'Conecte com seus sistemas existentes'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'R$ 99',
      period: '/mês',
      features: ['Até 1.000 clientes', 'Cashback até 5%', 'Relatórios básicos', 'Suporte por email']
    },
    {
      name: 'Professional',
      price: 'R$ 299',
      period: '/mês',
      features: ['Até 10.000 clientes', 'Cashback até 15%', 'Analytics avançado', 'Suporte prioritário'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sob consulta',
      period: '',
      features: ['Clientes ilimitados', 'Cashback personalizado', 'IA para campanhas', 'Suporte dedicado']
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Fale com Vendas
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contact">Contato</TabsTrigger>
            <TabsTrigger value="features">Recursos</TabsTrigger>
            <TabsTrigger value="pricing">Preços</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="contact" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Entre em Contato</CardTitle>
                  <CardDescription>
                    Preencha o formulário e nossa equipe entrará em contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-primary">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">(11) 99999-9999</p>
                    <p className="text-sm text-muted-foreground">
                      Seg - Sex: 9h às 18h
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">vendas@cashback.com</p>
                    <p className="text-sm text-muted-foreground">
                      Resposta em até 24h
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Conversar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {salesFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={plan.popular ? 'border-primary' : ''}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{plan.name}</CardTitle>
                      {plan.popular && <Badge>Mais Popular</Badge>}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4" variant={plan.popular ? 'default' : 'outline'}>
                      Escolher Plano
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Agende uma Demonstração
                </CardTitle>
                <CardDescription>
                  Veja como nossa plataforma pode revolucionar seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">O que você verá na demo:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Dashboard completo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Configuração de cashback</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Relatórios em tempo real</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Integração com ERP</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Duração e formato:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">30-45 minutos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Videoconferência online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Personalizada para seu negócio</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-primary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Agendar Demo Gratuita
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SalesSupportModal;
