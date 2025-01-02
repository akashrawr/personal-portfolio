import { createClient } from '@supabase/supabase-js';

// Fetch environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || '';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
