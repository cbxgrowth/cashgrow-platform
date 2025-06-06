export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      client_invitations: {
        Row: {
          accepted_at: string | null
          client_id: string
          company_id: string
          created_at: string
          email_sent_at: string | null
          expires_at: string
          id: string
          invitation_token: string
        }
        Insert: {
          accepted_at?: string | null
          client_id: string
          company_id: string
          created_at?: string
          email_sent_at?: string | null
          expires_at: string
          id?: string
          invitation_token: string
        }
        Update: {
          accepted_at?: string | null
          client_id?: string
          company_id?: string
          created_at?: string
          email_sent_at?: string | null
          expires_at?: string
          id?: string
          invitation_token?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_invitations_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      client_transactions: {
        Row: {
          amount: number
          cashback_amount: number
          cashback_percentage: number
          client_id: string
          company_id: string
          created_at: string
          description: string | null
          id: string
          transaction_date: string
          transaction_type: string | null
        }
        Insert: {
          amount: number
          cashback_amount: number
          cashback_percentage: number
          client_id: string
          company_id: string
          created_at?: string
          description?: string | null
          id?: string
          transaction_date?: string
          transaction_type?: string | null
        }
        Update: {
          amount?: number
          cashback_amount?: number
          cashback_percentage?: number
          client_id?: string
          company_id?: string
          created_at?: string
          description?: string | null
          id?: string
          transaction_date?: string
          transaction_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_transactions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "company_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      company_clients: {
        Row: {
          account_status: string | null
          address: Json | null
          birth_date: string | null
          company_id: string
          cpf: string
          created_at: string
          created_by_integration: boolean | null
          email: string
          full_name: string
          id: string
          integration_source: string | null
          last_purchase_at: string | null
          password_reset_required: boolean | null
          phone: string | null
          temporary_password: string | null
          total_cashback: number | null
          total_spent: number | null
          updated_at: string
        }
        Insert: {
          account_status?: string | null
          address?: Json | null
          birth_date?: string | null
          company_id: string
          cpf: string
          created_at?: string
          created_by_integration?: boolean | null
          email: string
          full_name: string
          id?: string
          integration_source?: string | null
          last_purchase_at?: string | null
          password_reset_required?: boolean | null
          phone?: string | null
          temporary_password?: string | null
          total_cashback?: number | null
          total_spent?: number | null
          updated_at?: string
        }
        Update: {
          account_status?: string | null
          address?: Json | null
          birth_date?: string | null
          company_id?: string
          cpf?: string
          created_at?: string
          created_by_integration?: boolean | null
          email?: string
          full_name?: string
          id?: string
          integration_source?: string | null
          last_purchase_at?: string | null
          password_reset_required?: boolean | null
          phone?: string | null
          temporary_password?: string | null
          total_cashback?: number | null
          total_spent?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          cashback_multiplier: number | null
          created_at: string | null
          description: string | null
          has_bonus_dates: boolean | null
          has_early_access: boolean | null
          has_exclusive_campaigns: boolean | null
          id: number
          name: string
          pix_limit_per_month: number | null
          price: number
          priority_support: boolean | null
        }
        Insert: {
          cashback_multiplier?: number | null
          created_at?: string | null
          description?: string | null
          has_bonus_dates?: boolean | null
          has_early_access?: boolean | null
          has_exclusive_campaigns?: boolean | null
          id?: number
          name: string
          pix_limit_per_month?: number | null
          price: number
          priority_support?: boolean | null
        }
        Update: {
          cashback_multiplier?: number | null
          created_at?: string | null
          description?: string | null
          has_bonus_dates?: boolean | null
          has_early_access?: boolean | null
          has_exclusive_campaigns?: boolean | null
          id?: number
          name?: string
          pix_limit_per_month?: number | null
          price?: number
          priority_support?: boolean | null
        }
        Relationships: []
      }
      user_plans: {
        Row: {
          created_at: string | null
          current_month_pix_count: number | null
          id: number
          last_pix_rescue: string | null
          plan_id: number | null
          renewal_date: string | null
          start_date: string
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_month_pix_count?: number | null
          id?: number
          last_pix_rescue?: string | null
          plan_id?: number | null
          renewal_date?: string | null
          start_date: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_month_pix_count?: number | null
          id?: number
          last_pix_rescue?: string | null
          plan_id?: number | null
          renewal_date?: string | null
          start_date?: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_plans_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_id: number | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: number | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_id?: number | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_invitation_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_temp_password: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
