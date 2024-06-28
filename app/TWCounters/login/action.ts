import { supabase } from "@/utils/supabase/supabase";

export const login = async () => {
   const { error } = await supabase.auth.signInWithOAuth({provider: 'github'});
   if (error) {
       console.error(error.message)
   } 
};