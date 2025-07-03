
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Trophy,
  Star,
  ThumbsUp,
  Eye
} from "lucide-react";

const Community = () => {
  const posts = [
    {
      id: 1,
      author: { name: 'Maria Silva', avatar: '', level: 'VIP Gold' },
      content: 'Acabei de descobrir uma promoção incrível na Zara! 30% de desconto + 8% de cashback. Quem mais aproveitou?',
      likes: 24,
      comments: 8,
      shares: 3,
      timeAgo: '2h',
      category: 'Dicas'
    },
    {
      id: 2,
      author: { name: 'João Santos', avatar: '', level: 'Premium' },
      content: 'Pessoal, consegui R$ 150 de cashback só este mês seguindo as dicas da comunidade. Muito obrigado! 🎉',
      likes: 45,
      comments: 12,
      shares: 6,
      timeAgo: '4h',
      category: 'Conquista'
    },
    {
      id: 3,
      author: { name: 'Ana Costa', avatar: '', level: 'VIP Elite' },
      content: 'Alguém sabe se vai ter promoção especial na Black Friday? Estou guardando meus pontos! 🛍️',
      likes: 18,
      comments: 15,
      shares: 2,
      timeAgo: '6h',
      category: 'Pergunta'
    }
  ];

  const leaderboard = [
    { name: 'Carlos Mendes', cashback: 2450, position: 1, badge: '👑' },
    { name: 'Fernanda Lima', cashback: 2280, position: 2, badge: '🥈' },
    { name: 'Ricardo Sousa', cashback: 2150, position: 3, badge: '🥉' },
    { name: 'Você', cashback: 1890, position: 8, badge: '⭐' }
  ];

  const events = [
    {
      title: 'Workshop: Maximizando Cashback',
      date: '15 Jan, 19h',
      participants: 156,
      type: 'Online'
    },
    {
      title: 'Encontro VIP São Paulo',
      date: '22 Jan, 18h',
      participants: 45,
      type: 'Presencial'
    },
    {
      title: 'Webinar: Tendências 2024',
      date: '28 Jan, 20h',
      participants: 89,
      type: 'Online'
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Comunidade CBX
          </h1>
          <p className="text-muted-foreground">Conecte-se, compartilhe dicas e maximize seus ganhos</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-primary/80">
          <MessageCircle className="h-4 w-4 mr-2" />
          Nova Publicação
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl font-bold">12.5K</div>
            <div className="text-sm text-muted-foreground">Membros Ativos</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MessageCircle className="h-8 w-8 mx-auto text-green-600 mb-2" />
            <div className="text-2xl font-bold">1.8K</div>
            <div className="text-sm text-muted-foreground">Posts Esta Semana</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
            <div className="text-2xl font-bold">R$ 2.8M</div>
            <div className="text-sm text-muted-foreground">Cashback Total</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 mx-auto text-orange-600 mb-2" />
            <div className="text-2xl font-bold">4.2</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Feed de Posts */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Feed da Comunidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{post.author.name}</span>
                        <Badge variant="outline" className="text-xs">{post.author.level}</Badge>
                        <span className="text-xs text-muted-foreground">{post.timeAgo}</span>
                      </div>
                      <Badge variant="secondary" className="mb-2 text-xs">{post.category}</Badge>
                      <p className="text-sm mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <button className="flex items-center gap-1 hover:text-red-500">
                          <Heart className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500">
                          <MessageCircle className="h-4 w-4" />
                          {post.comments}
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-500">
                          <Share2 className="h-4 w-4" />
                          {post.shares}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ranking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Top Cashback
              </CardTitle>
              <CardDescription>Ranking deste mês</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{user.badge}</span>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">#{user.position}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">R$ {user.cashback}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Próximos Eventos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-muted/50">
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {event.participants}
                    </span>
                    <Badge variant="outline" className="text-xs">{event.type}</Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Participar
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Grupos Populares */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Grupos Populares
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: 'Dicas de Moda', members: 2450, active: true },
                { name: 'Economia Doméstica', members: 1890, active: true },
                { name: 'Tech & Gadgets', members: 1240, active: false },
                { name: 'Viagens & Turismo', members: 980, active: false }
              ].map((group, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{group.name}</div>
                    <div className="text-xs text-muted-foreground">{group.members} membros</div>
                  </div>
                  <Button size="sm" variant={group.active ? 'default' : 'outline'}>
                    {group.active ? 'Participando' : 'Participar'}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
