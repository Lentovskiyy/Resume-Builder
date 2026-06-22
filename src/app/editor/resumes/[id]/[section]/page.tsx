import ContactSection from "@/components/layouts/Editor/ResumeSections/ContactSection/ContactSection";
import SectionHeader from "@/components/layouts/Editor/ResumeSections/SectionHeader/SectionHeader";

interface PageProps {
  params: Promise<{ id: string, section: string }>;
  searchParams: Promise<{ name?: string; experience?: string }>;
}

export default async function ResumeDetailsPage({ params, searchParams }: PageProps) {
  const { id, section } = await params;
  const { name, experience } = await searchParams;


  return (
    <>
      <SectionHeader/>

      <ContactSection
        id={id}
        name={name || "Untitled Resume"}
        experience={experience || "Not specified"}
      />
    </>

  );
}