import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ghpvrdwvqjmxvkkjigsf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdocHZyZHd2cWpteHZra2ppZ3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMjgxMDQsImV4cCI6MjAyNzgwNDEwNH0.6u5hajyYVFGuDQNA_S9KnVGwzXACqKV4_p_VhVFzAyM";

export const supabase = createClient(supabaseUrl, supabaseKey);
