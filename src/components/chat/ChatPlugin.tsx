
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react";
import { useAuth } from '@/hooks/auth/useAuth';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatPlugin: React.FC = () => {
  const { userType } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Mensagem de boas-vindas baseada no tipo de usuário
    if (isOpen && messages.length === 0) {
      const welcomeMessage = userType === 'company' 
        ? "Olá! Sou seu assistente de negócios. Como posso ajudar você hoje? Posso auxiliar com produtos, clientes, relatórios e muito mais!"
        : "Olá! Sou seu assistente pessoal de cashback. Como posso ajudar você hoje? Posso te ajudar com saldo, missões, recomendações e dicas!";
      
      setTimeout(() => {
        setMessages([{
          id: '1',
          text: welcomeMessage,
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 500);
    }
  }, [isOpen, userType, messages.length]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Respostas específicas para empresas
    if (userType === 'company') {
      if (message.includes('produto') || message.includes('catálogo')) {
        return "Para gerenciar produtos, você pode:\n• Adicionar novos produtos via botão 'Novo Produto'\n• Importar em lote via CSV\n• Editar preços e cashback\n• Controlar estoque\n\nQuer que eu te mostre como fazer algo específico?";
      }
      if (message.includes('cliente')) {
        return "Para gerenciar clientes:\n• Cadastre novos clientes manualmente\n• Importe via planilha CSV\n• Visualize histórico de compras\n• Acompanhe cashback pago\n\nPrecisa de ajuda com alguma funcionalidade específica?";
      }
      if (message.includes('vendas') || message.includes('transação')) {
        return "Para registrar vendas:\n• Use 'Nova Transação' na aba Transações\n• Selecione o cliente e valor\n• O cashback é calculado automaticamente\n• Acompanhe relatórios em tempo real\n\nQuer que eu te explique o processo detalhadamente?";
      }
      if (message.includes('relatório') || message.includes('analise')) {
        return "Você pode acessar:\n• Dashboard com métricas em tempo real\n• Relatórios detalhados por período\n• Análise de performance\n• Campanhas com IA\n\nQual relatório você gostaria de ver?";
      }
      return "Como empresa, posso te ajudar com: produtos, clientes, vendas, relatórios, campanhas de IA, integração com APIs e muito mais. O que você gostaria de fazer?";
    }
    
    // Respostas específicas para consumidores
    else {
      if (message.includes('saldo') || message.includes('dinheiro')) {
        return "Seu saldo de cashback pode ser visto na aba 'Carteira'. Você pode:\n• Resgatar via PIX\n• Ver histórico de ganhos\n• Acompanhar missões ativas\n\nQuer que eu te mostre como resgatar?";
      }
      if (message.includes('missão') || message.includes('missões')) {
        return "As missões são desafios que geram cashback extra:\n• Missões diárias\n• Desafios semanais\n• Campanhas especiais\n• Bônus por fidelidade\n\nVá para 'Missões' para ver as disponíveis!";
      }
      if (message.includes('empresa') || message.includes('loja')) {
        return "Para encontrar empresas parceiras:\n• Use a aba 'Empresas'\n• Filtre por categoria\n• Veja cashback oferecido\n• Use localização para encontrar próximas\n\nQuer que eu te ajude a encontrar uma categoria específica?";
      }
      if (message.includes('cashback')) {
        return "O cashback funciona assim:\n• Compre em empresas parceiras\n• Ganhe % de volta automaticamente\n• Acumule na sua carteira\n• Resgate quando quiser\n\nSua taxa atual depende do seu plano!";
      }
      return "Como consumidor, posso te ajudar com: saldo, resgates, missões, empresas parceiras, promoções e muito mais. O que você precisa?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular delay de resposta do bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 segundos
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-primary hover:scale-110 transition-transform shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-80 ${isMinimized ? 'h-auto' : 'h-96'} shadow-xl border-0 bg-white/95 backdrop-blur-sm`}>
        <CardHeader className="pb-2 px-4 py-3 bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <CardTitle className="text-sm">
                  Assistente {userType === 'company' ? 'Empresarial' : 'Pessoal'}
                </CardTitle>
                <Badge variant="secondary" className="text-xs bg-white/20 text-white">
                  Online
                </Badge>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-80">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-gradient-primary text-white ml-auto'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                    <div className={`text-xs mt-1 opacity-70 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  size="icon"
                  className="bg-gradient-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ChatPlugin;
