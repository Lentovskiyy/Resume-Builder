import  {createResume, getUserResumes} from "@/services/editor/resumes";

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