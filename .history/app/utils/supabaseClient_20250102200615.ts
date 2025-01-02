import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define types for environment variables (this part helps with type-checking)
const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY as string;

// Initialize Supabase client with types
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
