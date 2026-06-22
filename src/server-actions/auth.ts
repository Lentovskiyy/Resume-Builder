"use server"

import {registerUser, loginUser, logoutUser} from '@/services/auth'

export async function handleRegister(email: string, password: string) {
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    await registerUser(email, password);
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function handleLogin(email: string, password: string) {
  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  try {
    await loginUser(email, password);
  } catch (error: any) {
    // If Supabase tells us the credentials don't match, return our custom message
    if (error.message?.includes("credentials") || error.status === 400) {
      return { error: "Email or password is incorrect." };
    }

    // Fallback for other issues (like network errors)
    return { error: error.message || "Login failed. Please try again." };
  }
}

export async function handleLogout() {
  await logoutUser();
}

// export async function handleChangeEmail(email: string) {
//   if (!email) {
//     return { error: "Email is required" };
//   }
//
//   try {
//     const data = await changeEmail(email);
//     return { success: true };
//   } catch (error: any) {
//     return { error: error.message || "Change email failed" };
//   }
// }
//
// export async function handleChangePassword(oldPassword: string, newPassword: string) {
//   if (!newPassword || !oldPassword) {
//     throw new Error("");
//   }
//
//   try {
//     await changePassword(oldPassword, newPassword);
//     return { success: true };
//
//   } catch (error: any) {
//     return { error: error.message || "Change password failed" };
//   }
// }