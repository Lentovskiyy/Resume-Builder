"use server"; // 👈 ВОТ ЭТА СТРОКА ИСПРАВИТ ВСЁ!

import {createClient} from "@/services/supabase/serverMain";

interface ICreateResumeArgs {
  name: string;
  experience: string;
}

export const createResume = async ({ name, experience }: ICreateResumeArgs) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("No user found");
  }

  const {data, error} =  await supabase
    .from("resumes")
    .insert({
    user_id: user.id,
    name: name,
    experience: experience,
    content: {}
  })
    .select("id")
    .single();

  if (error) {
    console.error("Database insert failed:", error.message);
    throw new Error(error.message);
  }

  return data.id;
};

export const getUserResumes = async () => {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No user found");
  }

  const {data, error} =  await supabase
    .from("resumes")
    .select("id, name, experience")
    .eq("user_id", user.id)
    .order("created_at", {ascending: false})

  if (error) {
    console.error("Failed to fetch resumes:", error.message);
    throw new Error(error.message);
  }

  return data;
}