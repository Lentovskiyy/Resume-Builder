import ContactSection from "@/components/layouts/Editor/ResumeSections/ContactSection/ContactSection";
import SectionHeader from "@/components/layouts/Editor/ResumeSections/SectionHeader/SectionHeader";
import CertificationSection from "@/components/layouts/Editor/ResumeSections/CertifiacationSection/CertifiacationSection";
import CourseWork from "@/components/layouts/Editor/ResumeSections/CourseworkSection/CourseworkSection";
import EducationSection from "@/components/layouts/Editor/ResumeSections/EducationSection/EducationSection";
import ExperienceSection from "@/components/layouts/Editor/ResumeSections/ExperienceSection/ExperienceSection";
import InvolvementSection from "@/components/layouts/Editor/ResumeSections/InvolvementSection/InvolvementSection";
import ProjectSection from "@/components/layouts/Editor/ResumeSections/ProjectSection/ProjectSection";
import SkillSection from "@/components/layouts/Editor/ResumeSections/SkillSection/SkillSection";
import SummarySection from "@/components/layouts/Editor/ResumeSections/SummarySection/SummarySection";

interface PageProps {
  params: Promise<{ id: string, section: string }>;
  searchParams: Promise<{ name?: string; experience?: string }>;
}

export default async function ResumeDetailsPage({ params, searchParams }: PageProps) {
  const { id, section } = await params;
  const { name, experience } = await searchParams;

  const sectionMap: Record<string, React.ComponentType<any>> = {
    contact: ContactSection,
    education: EducationSection,
    experience: ExperienceSection,
    skills: SkillSection,
    summary: SummarySection,
    project: ProjectSection,
    certification: CertificationSection,
    coursework: CourseWork,
    involvement: InvolvementSection,
  }

  const ActiveSectionComponent = sectionMap[section.toLowerCase()];

  return (
    <>
      <SectionHeader
        currentSection={section}
        resumeId={id}
      />



      {ActiveSectionComponent ? (
        <ActiveSectionComponent
          id={id}
          name={name || "Untitled Resume"}
          experience={experience || "Not specified"}
        />
      ) : (
        <div className="p-4 text-red-500">
          Section "{section}" not found.
        </div>
      )}
    </>

  );
}