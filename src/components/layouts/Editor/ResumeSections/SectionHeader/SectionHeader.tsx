import Link from "next/link";

interface ISectionHeaderProps {
  currentSection: string;
  resumeId: string;
}

const SectionHeader = ({currentSection, resumeId}: ISectionHeaderProps) => {
  const navItems = [
    { name: "Contact", id: "contact" },
    { name: "Experience", id: "experience" },
    { name: "Project", id: "project" },
    { name: "Education", id: "education" },
    { name: "Certification", id: "certification" },
    { name: "Coursework", id: "coursework" },
    { name: "Involvement", id: "involvement" },
    { name: "Skills", id: "skill" },
    { name: "Summary", id: "summary" },
    { name: "Finish & Preview", id: "preview" },
  ];


  return (
    <nav className="w-full  bg-gray-900 px-12 py-2 font-sans ">
      <ul className="flex justify-around items-center bg-gray-800 mt-4 py-3 px-6 rounded-xl max-w-5xl mx-auto">
        {navItems.map((navItem) => {
          const isActive = currentSection === navItem.id

          return (
            <li key={navItem.id}>
              <Link
                href={`/editor/resumes/${resumeId}/${navItem.id}`}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-indigo-400 font-semibold" 
                    : "text-gray-400 hover:text-gray-200" 
                }`}
              >
                {navItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionHeader;