import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://yvmryekpbffzqznbaivy.supabase.co";
const SUPABASE_KEY = "sb_publishable_j_CkfxNFMoka4oY7vTyT2g_aGd4EkRd";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
