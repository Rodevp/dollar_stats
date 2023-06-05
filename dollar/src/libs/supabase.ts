import { SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

export const supabase = new SupabaseClient(
    environment.url, environment.publicKey
)