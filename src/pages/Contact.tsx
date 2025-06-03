import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio de mensagem
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve."
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };
  return <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground">
            Estamos aqui para ajudar. Mande-nos uma mensagem!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4 md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
                <CardDescription>
                  Diversas formas de nos encontrar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">contato@cbxgrowth.com.br</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Telefone</h3>
                    <p className="text-sm text-muted-foreground">(88) 98843-2310</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <h3 className="font-medium">Endereço</h3>
                    <p className="text-sm text-muted-foreground">
                      Av. Paulista, 1000<br />
                      São Paulo, SP<br />
                      CEP 01310-100
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Envie-nos uma mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e retornaremos o contato em até 24 horas úteis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da mensagem" value={subject} onChange={e => setSubject(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} value={message} onChange={e => setMessage(e.target.value)} required />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Ao enviar este formulário, você concorda com nossa política de privacidade.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>;
};
export default Contact;