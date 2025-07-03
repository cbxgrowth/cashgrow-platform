
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  PieChart, 
  LineChart,
  Activity,
  Target,
  Calendar,
  Eye
} from 'lucide-react';

const AnalyticsPage = () => {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: 'Dashboards Interativos',
      description: 'Visualize seus dados em tempo real com gráficos dinâmicos',
      features: ['Gráficos customizáveis', 'Filtros avançados', 'Exportação de dados', 'Atualizações em tempo real']
    },
    {
      icon: Users,
      title: 'Análise de Clientes',
      description: 'Entenda o comportamento e preferências dos seus clientes',
      features: ['Segmentação automática', 'Perfis detalhados', 'Jornada do cliente', 'Análise de cohort']
    },
    {
      icon: TrendingUp,
      title: 'Métricas de Performance',
      description: 'Acompanhe KPIs importantes para seu negócio',
      features: ['ROI de campanhas', 'Taxa de conversão', 'Lifetime value', 'Churn rate']
    },
    {
      icon: Target,
      title: 'Predições e Insights',
      description: 'IA que prevê tendências e sugere ações',
      features: ['Previsão de vendas', 'Detecção de padrões', 'Alertas automáticos', 'Recomendações IA']
    }
  ];

  const metrics = [
    { label: 'Precisão Preditiva', value: 95, color: 'bg-green-500' },
    { label: 'Redução no CAC', value: 85, color: 'bg-blue-500' },
    { label: 'Aumento no ROI', value: 78, color: 'bg-purple-500' },
    { label: 'Satisfação Cliente', value: 92, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-background to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics Empresarial
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Insights que Transformam
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tome decisões baseadas em dados com nossa plataforma de analytics avançada. 
            Visualize, analise e otimize seu negócio com inteligência artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
              Ver Demo Interativa
            </Button>
            <Button variant="outline" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Resultados Comprovados</h2>
            <p className="text-muted-foreground">Veja o impacto real dos nossos analytics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-green-600 mb-2">
                    {metric.value}%
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {metric.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={metric.value} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analytics Completo
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para entender seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-green-100">
                      <feature.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">
                Veja o Analytics em Ação
              </CardTitle>
              <CardDescription className="text-green-100 text-lg mb-8">
                Agende uma demonstração personalizada e veja como nossos analytics 
                podem transformar suas decisões de negócio
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Demo
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  <Activity className="mr-2 h-5 w-5" />
                  Ver Casos de Uso
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
