
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = VITE_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)