import { supabase } from "@/services/supabase/main";
import {createClient} from "@/services/supabase/serverMain";

export const registerUser = async (email: string, password: string) => {
  const supabase = await createClient(); // 👈 Initialize the server-aware instance


  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) throw authError;

  const userId = authData.user?.id;
  if (!userId) throw new Error("User creation failed.");

  return authData;
};

export const loginUser = async (email: string, password: string) => {
  const supabase = await createClient(); // 👈 Initialize the server-aware instance

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const logoutUser = async () => {


  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  return { success: true };
};






// export const changeEmail = async (email: string) => {
//   const supabase = await createClient();
//
//   const {error } = await supabase.auth.updateUser({
//     email: email
//   })
//
//   if (error) throw error;
//
//   return { success: true };
// }
//
// export const changePassword = async (oldPassword: string, newPassword: string) => {
//   const supabase = await createClient();
//
//   if (!newPassword || !oldPassword) {
//     throw new Error("");
//   }
//
//   if (newPassword === oldPassword) {
//     throw new Error("");
//   }
//
//   const { data, error } = await supabase.auth.updateUser({
//     current_password: oldPassword,
//     password: newPassword
//   })
//
//   if (error) throw error;
//
//   return { success: true};
// }