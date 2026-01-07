import { createClient } from "@supabase/supabase-js";

function get(key) {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(key) || "";
}

export function getSupabase() {
  const supabaseUrl = get("SUPABASE_URL");
  const supabaseAnonKey = get("SUPABASE_ANON_KEY");

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in localStorage");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
