export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ai_credit_transactions: {
        Row: {
          action_type: string
          company_id: string
          created_at: string
          credits_consumed: number
          description: string | null
          id: string
          suggestion_id: string | null
        }
        Insert: {
          action_type: string
          company_id: string
          created_at?: string
          credits_consumed?: number
          description?: string | null
          id?: string
          suggestion_id?: string | null
        }
        Update: {
          action_type?: string
          company_id?: string
          created_at?: string
          credits_consumed?: number
          description?: string | null
          id?: string
          suggestion_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_credit_transactions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: unknown | null
          new_values: Json | null
          old_values: Json | null
          resource_id: string | null
          resource_type: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          resource_id?: string | null
          resource_type?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
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
      companies: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          industry: string | null
          is_active: boolean | null
          logo_url: string | null
          monthly_revenue: number | null
          name: string
          owner_id: string | null
          size: string | null
          subscription_ends_at: string | null
          subscription_plan_id: number | null
          subscription_started_at: string | null
          subscription_status:
            | Database["public"]["Enums"]["subscription_status"]
            | null
          total_users: number | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          monthly_revenue?: number | null
          name: string
          owner_id?: string | null
          size?: string | null
          subscription_ends_at?: string | null
          subscription_plan_id?: number | null
          subscription_started_at?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_status"]
            | null
          total_users?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          monthly_revenue?: number | null
          name?: string
          owner_id?: string | null
          size?: string | null
          subscription_ends_at?: string | null
          subscription_plan_id?: number | null
          subscription_started_at?: string | null
          subscription_status?:
            | Database["public"]["Enums"]["subscription_status"]
            | null
          total_users?: number | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      company_ai_credits: {
        Row: {
          company_id: string
          created_at: string
          id: string
          last_refill_date: string | null
          remaining_credits: number | null
          total_credits: number
          updated_at: string
          used_credits: number
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: string
          last_refill_date?: string | null
          remaining_credits?: number | null
          total_credits?: number
          updated_at?: string
          used_credits?: number
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
          last_refill_date?: string | null
          remaining_credits?: number | null
          total_credits?: number
          updated_at?: string
          used_credits?: number
        }
        Relationships: [
          {
            foreignKeyName: "company_ai_credits_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
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
      company_locations: {
        Row: {
          address: string | null
          city: string | null
          company_id: string | null
          country: string | null
          created_at: string | null
          id: string
          latitude: number
          longitude: number
          state: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_id?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          latitude: number
          longitude: number
          state?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          company_id?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          latitude?: number
          longitude?: number
          state?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_locations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_products: {
        Row: {
          cashback_percentage: number
          category: string
          company_id: string
          created_at: string
          created_by_integration: boolean
          description: string | null
          id: string
          integration_source: string | null
          is_active: boolean
          name: string
          price: number
          sku: string
          stock_quantity: number
          updated_at: string
        }
        Insert: {
          cashback_percentage?: number
          category: string
          company_id: string
          created_at?: string
          created_by_integration?: boolean
          description?: string | null
          id?: string
          integration_source?: string | null
          is_active?: boolean
          name: string
          price?: number
          sku: string
          stock_quantity?: number
          updated_at?: string
        }
        Update: {
          cashback_percentage?: number
          category?: string
          company_id?: string
          created_at?: string
          created_by_integration?: boolean
          description?: string | null
          id?: string
          integration_source?: string | null
          is_active?: boolean
          name?: string
          price?: number
          sku?: string
          stock_quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_company_products_company_id"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_users: {
        Row: {
          company_id: string | null
          id: string
          invited_by: string | null
          joined_at: string | null
          role: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          id?: string
          invited_by?: string | null
          joined_at?: string | null
          role?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          id?: string
          invited_by?: string | null
          joined_at?: string | null
          role?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_users_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
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
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      proximity_metrics: {
        Row: {
          calculated_at: string | null
          company_id: string | null
          id: string
          radius_km: number
          user_count: number | null
        }
        Insert: {
          calculated_at?: string | null
          company_id?: string | null
          id?: string
          radius_km: number
          user_count?: number | null
        }
        Update: {
          calculated_at?: string | null
          company_id?: string | null
          id?: string
          radius_km?: number
          user_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proximity_metrics_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      system_settings: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          is_public: boolean | null
          key: string
          updated_at: string | null
          value: Json | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key: string
          updated_at?: string | null
          value?: Json | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          key?: string
          updated_at?: string | null
          value?: Json | null
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
      user_proximity_data: {
        Row: {
          city: string | null
          id: string
          is_active: boolean | null
          last_updated: string | null
          latitude: number
          longitude: number
          privacy_consent: boolean | null
          state: string | null
          user_id: string | null
        }
        Insert: {
          city?: string | null
          id?: string
          is_active?: boolean | null
          last_updated?: string | null
          latitude: number
          longitude: number
          privacy_consent?: boolean | null
          state?: string | null
          user_id?: string | null
        }
        Update: {
          city?: string | null
          id?: string
          is_active?: boolean | null
          last_updated?: string | null
          latitude?: number
          longitude?: number
          privacy_consent?: boolean | null
          state?: string | null
          user_id?: string | null
        }
        Relationships: []
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
      add_ai_credits: {
        Args: {
          p_company_id: string
          p_credits_amount: number
          p_description?: string
        }
        Returns: undefined
      }
      calculate_distance: {
        Args: { lat1: number; lon1: number; lat2: number; lon2: number }
        Returns: number
      }
      consume_ai_credits: {
        Args: {
          p_company_id: string
          p_action_type: string
          p_credits_amount?: number
          p_description?: string
          p_suggestion_id?: string
        }
        Returns: boolean
      }
      generate_invitation_token: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_temp_password: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_super_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      update_proximity_metrics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      subscription_status: "active" | "inactive" | "suspended" | "cancelled"
      user_role: "super_admin" | "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      subscription_status: ["active", "inactive", "suspended", "cancelled"],
      user_role: ["super_admin", "admin", "user"],
    },
  },
} as const
