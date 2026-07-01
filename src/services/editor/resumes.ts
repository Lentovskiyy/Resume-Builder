"use server";

import {createClient} from "@/services/supabase/serverMain";
import { IResumeContent } from "@/shared/interfaces/resume/IResume";

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
    console.error("Failed to fetch resume:", error.message);
    throw new Error(error.message);
  }

  return data;
}

export const updateResumeCategory = async <K extends keyof IResumeContent>(
  resumeId: string,
  categoryId: K,
  categoryData: IResumeContent[K]
) => {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("No user found");
  }

  const {data, error} =  await supabase
    .from("resumes")
    .select("content")
    .eq("user_id", user.id)
    .eq("id", resumeId)
    .single()

  if (error) {
    throw new Error(error.message);
  }

  const currentContent = (data.content as IResumeContent) || {}

  const updatedContent: IResumeContent = {...currentContent, [categoryId]: categoryData};

  const {error: updateError} = await supabase
    .from("resumes")
    .update({content: updatedContent})
    .eq("user_id", user.id)
    .eq("id", resumeId)

  if (updateError) {
    throw new Error(updateError.message);
  }

  return { success: true };
}

export const getUserResumeContent = async (id: string) => {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No user found");
  }

  const {data, error} =  await supabase
    .from("resumes")
    .select("content")
    .eq("user_id", user.id)
    .eq("id", id)

  if (error) {
    console.error("Failed to fetch resume:", error.message);
    throw new Error(error.message);
  }

  return data;
}