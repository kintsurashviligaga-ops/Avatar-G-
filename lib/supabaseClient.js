import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function get(key) {
  return localStorage.getItem(key) || "";
}

export function getSupabase() {
  const supabaseUrl = get("SUPABASE_URL");
  const supabaseAnonKey = get("SUPABASE_ANON_KEY");

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase not configured");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
