"use server";

import  {createResume, getUserResumes, updateResumeCategory, getUserResumeContent} from "@/services/editor/resumes";
import {IResumeContent} from "@/shared/interfaces/resume/IResume";

interface ICreateResumeArgs {
  name: string;
  experience: string;
}

export async function handleResumeCreation ({ name, experience }: ICreateResumeArgs) {
  if (!name.trim() || !experience || experience === "Select...") {
    throw new Error("Invalid name or experience level provided.");
  }

  try {
    const newResumeId = await createResume({ name, experience });

    return newResumeId;
  } catch (error) {
    console.error("Handler failed during creation chain:", error);
    throw error;
  }
}

export async function handleResumeGetter () {
  try {
    const resumeFound = await getUserResumes();

    return resumeFound;
  } catch (error) {
    console.error("Handler failed during creation chain:", error);
    throw error;
  }
}

export async function handleResumeUpdate  <K extends keyof IResumeContent>(
  resumeId: string,
  categoryId: K,
  categoryData: IResumeContent[K]
){

  try {
    const result = await updateResumeCategory(resumeId, categoryId, categoryData);
    return result;

  } catch (error) {
    throw error
  }
}



export async function handleResumeContentGetter (id: string) {
  try {
    const content = await getUserResumeContent(id);

    return content;
  } catch (error) {
    console.error("Handler failed during creation chain:", error);
    throw error;
  }
}
