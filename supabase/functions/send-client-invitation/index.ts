
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ClientInvitationRequest {
  clientId: string;
  clientName: string;
  clientEmail: string;
  tempPassword: string;
  companyName: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { clientId, clientName, clientEmail, tempPassword, companyName }: ClientInvitationRequest = await req.json();

    // Simular envio de email (em produção, usar serviço como Resend)
    console.log(`Enviando email para ${clientEmail}:`);
    console.log(`Assunto: Bem-vindo ao Cashback - Sua conta foi criada!`);
    console.log(`
      Olá ${clientName},

      Sua conta no sistema de Cashback foi criada pela empresa ${companyName}!

      Dados de acesso:
      - CPF: [seu CPF cadastrado]
      - Senha temporária: ${tempPassword}

      Para sua segurança, você deve alterar sua senha no primeiro acesso.

      Acesse: ${Deno.env.get("SITE_URL")}/client-login

      Bem-vindo ao nosso sistema de cashback!
    `);

    // Marcar email como enviado
    await supabase
      .from('client_invitations')
      .update({ email_sent_at: new Date().toISOString() })
      .eq('client_id', clientId);

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado com sucesso" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Erro ao enviar convite:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
