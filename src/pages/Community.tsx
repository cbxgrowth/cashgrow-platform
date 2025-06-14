
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Trophy, 
  Star,
  TrendingUp,
  Heart,
  Share2,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  BookOpen,
  Zap,
  Target,
  Award
} from "lucide-react";

const Community = () => {
  const communityStats = [
    { icon: Users, value: "50K+", label: "Membros ativos" },
    { icon: MessageCircle, value: "15K+", label: "Discussões mensais" },
    { icon: Calendar, value: "200+", label: "Eventos realizados" },
    { icon: Trophy, value: "1K+", label: "Projetos compartilhados" }
  ];

  const topContributors = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Senior",
      avatar: "/placeholder.svg",
      contributions: 245,
      level: "Expert"
    },
    {
      name: "Carlos Mendes",
      role: "Product Manager",
      avatar: "/placeholder.svg",
      contributions: 189,
      level: "Advanced"
    },
    {
      name: "Marina Costa",
      role: "UX Designer",
      avatar: "/placeholder.svg",
      contributions: 156,
      level: "Advanced"
    },
    {
      name: "Pedro Santos",
      role: "Tech Lead",
      avatar: "/placeholder.svg",
      contributions: 134,
      level: "Intermediate"
    }
  ];

  const recentDiscussions = [
    {
      title: "Como otimizar performance da API de cashback?",
      author: "João Developer",
      replies: 23,
      likes: 45,
      category: "API",
      timeAgo: "2h atrás"
    },
    {
      title: "Melhores práticas para integração com e-commerce",
      author: "Maria Tech",
      replies: 18,
      likes: 32,
      category: "Integração",
      timeAgo: "4h atrás"
    },
    {
      title: "Nova feature: Cashback por geolocalização",
      author: "CBX Team",
      replies: 67,
      likes: 128,
      category: "Novidades",
      timeAgo: "1 dia atrás"
    },
    {
      title: "Tutorial: Implementando webhooks em PHP",
      author: "Lucas Backend",
      replies: 12,
      likes: 28,
      category: "Tutorial",
      timeAgo: "2 dias atrás"
    }
  ];

  const upcomingEvents = [
    {
      title: "CBX Growth Meetup - São Paulo",
      date: "25 Jun 2024",
      time: "19:00",
      type: "Presencial",
      attendees: 89
    },
    {
      title: "Webinar: Novas APIs 2024",
      date: "30 Jun 2024",
      time: "15:00",
      type: "Online",
      attendees: 245
    },
    {
      title: "Hackathon CBX Innovation",
      date: "05 Jul 2024",
      time: "09:00",
      type: "Híbrido",
      attendees: 156
    }
  ];

  const socialChannels = [
    {
      name: "Discord",
      description: "Chat em tempo real com a comunidade",
      members: "25K+",
      icon: MessageCircle,
      color: "bg-indigo-500"
    },
    {
      name: "GitHub",
      description: "Código aberto e contribuições",
      members: "8K+",
      icon: Github,
      color: "bg-gray-900"
    },
    {
      name: "Twitter",
      description: "Novidades e atualizações",
      members: "12K+",
      icon: Twitter,
      color: "bg-blue-500"
    },
    {
      name: "LinkedIn",
      description: "Networking profissional",
      members: "15K+",
      icon: Linkedin,
      color: "bg-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
            <Users className="w-4 h-4 mr-2" />
            Comunidade CBX Growth
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Conecte-se com a <span className="text-secondary">Comunidade</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de desenvolvedores, empresários e entusiastas que estão 
            construindo o futuro do cashback e fidelização digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar no Discord
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              Ver no GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossa Comunidade em Números
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Principais Contribuidores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Avatar className="mx-auto w-16 h-16 mb-4">
                    <AvatarImage src={contributor.avatar} />
                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{contributor.name}</CardTitle>
                  <CardDescription>{contributor.role}</CardDescription>
                  <Badge className={
                    contributor.level === 'Expert' ? 'bg-yellow-100 text-yellow-700' :
                    contributor.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }>
                    {contributor.level}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span>{contributor.contributions} contribuições</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Discussões Recentes</h2>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Todas
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentDiscussions.map((discussion, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{discussion.category}</Badge>
                        <span className="text-sm text-muted-foreground">{discussion.timeAgo}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <p className="text-muted-foreground">por {discussion.author}</p>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Próximos Eventos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={
                      event.type === 'Online' ? 'bg-green-100 text-green-700' :
                      event.type === 'Presencial' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }>
                      {event.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} às {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Participar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Canais Sociais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 rounded-full ${channel.color} flex items-center justify-center mb-4`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{channel.name}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                  <Badge variant="secondary">{channel.members} membros</Badge>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Seguir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para fazer parte da comunidade?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Conecte-se, aprenda, compartilhe e construa o futuro do cashback junto conosco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Users className="mr-2 h-5 w-5" />
              Entrar na Comunidade
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Share2 className="mr-2 h-5 w-5" />
              Compartilhar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
