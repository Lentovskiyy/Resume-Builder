"use client"

import {useEffect, useState} from "react";
import {IResumeContent, ISummary} from "@/shared/interfaces/resume/IResume";
import {handleResumeContentGetter} from "@/server-actions/editor/resumes";
import ResumeHeader from "@/components/ui/ResumeTemplate/TemplateHeader/TemplateHeader"
import TemplateSection from "@/components/ui/ResumeTemplate/TemplateSection/TemplateSection";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const PreviewSection = ({ id, name, experience }: IContactSectionProps)=> {
  const [formData, setFormData] = useState<IResumeContent>({
    contact: {
      fullName: "",
      phoneNumber: "",
      personalWebsite: "",
      state: "",
      email: "",
      linkedin: "",
      country: "",
      city: ""
    },
    experience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      description: ""
    },
    project: {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      projectUrl: "",
      description: ""
    },
    education: {
      degree: "",
      school: "",
      location: "",
      endDate: "",
      minor: "",
      gpa: "",
      additionalInfo: ""
    },
    certification: {
      name: "",
      issuer: "",
      date: "",
      relevance: ""
    },
    coursework: {
      courseName: "",
      institution: "",
      date: "",
      skillsUsed: "",
      skillsApplied: ""
    },
    involvement: {
      role: "",
      organization: "",
      startDate: "",
      endDate: "",
      college: "",
      description: ""
    },
    skill: {
      skill: ""
    },
    summary: {
      description: ""
    }
  });

  useEffect(() => {
    if (!id) return

    const getContent = async () => {
      try {
        const response = await handleResumeContentGetter(id);
        const content = response[0]?.content;
        setFormData(content || {})
      } catch (error) {
        console.error("Error content downloading:", error);
      }
    }
    getContent()
  }, [id])

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <main className="w-full  flex-1 bg-gray-900 px-12 py-8 font-sans">
      <header className="print:hidden w-full border-b border-slate-800 bg-slate-900 font-sans antialiased selection:bg-indigo-500/30">
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800">
          <div>
            <button className="text-xs font-semibold tracking-wider text-slate-400 uppercase transition-colors duration-150 ease-out hover:text-white">
              Template
            </button>
          </div>
          <div>
            <button
              onClick={handleDownloadPDF}
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all duration-150 ease-out hover:bg-indigo-500 hover:shadow active:scale-[0.98]"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 px-6 py-2.5 bg-slate-900/50  overflow-x-auto">
          <div className="flex items-center gap-3 border-r border-slate-800 pr-5">
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Icons</button>
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Profile Picture</button>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-800 pr-5">
            <button className="text-gray-50 font-medium transition-colors duration-150 ease-out hover:text-gray-200">Font</button>

            <div className="flex h-7 w-24 items-center overflow-hidden">
              <button className="text-gray-50 flex h-full flex-1 items-center justify-center font-bold transition-colors duration-150 ease-out hover:bg-slate-700 hover:text-gray-200 active:scale-95">
                -
              </button>
              <span className="w-8 select-none font-mono text-center text-gray-50">
                10
              </span >
              <button className="text-gray-50 flex h-full flex-1 items-center justify-center font-bold transition-colors duration-150 ease-out hover:bg-slate-700 hover:text-gray-200 active:scale-95">
                +
              </button>
            </div>
          </div>

          {/* Layout Controls */}
          <div className="flex items-center gap-3 border-r border-slate-800 pr-5">
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Spacing</button>
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Indent</button>
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Divider</button>
          </div>

          {/* Page & Canvas Setup */}
          <div className="flex items-center gap-3 border-r border-slate-800 pr-5">
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Paper Size</button>
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Zoom</button>
          </div>

          {/* Color Palette */}
          <div className="flex items-center gap-3">
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Text Color</button>
            <button className="text-gray-50 transition-colors duration-150 ease-out hover:text-gray-200">Accent Color</button>
          </div>
        </div>
      </header>



        {/*<header className="print:hidden">*/}
        {/*  <div className="flex justify-between bg-gray-800 p-4">*/}
        {/*    <div className="space-x-4">*/}
        {/*      <button className="text-gray-50">TEMPLATE</button>*/}
        {/*    </div>*/}
        {/*    <div className="space-x-4">*/}
        {/*      <button*/}
        {/*        className="text-gray-50"*/}
        {/*        onClick={handleDownloadPDF}*/}

        {/*      >DOWNLOAD PDF</button>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  <div className="flex flex-row bg-gray-700 p-4 gap-4">*/}
        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">Icons</button>*/}
        {/*      <button className="text-gray-50">Profile picture</button>*/}
        {/*    </div>*/}

        {/*    <div>*/}
        {/*      <button className="text-gray-50">Font</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">-</button>*/}
        {/*      <span className="text-gray-50">10px</span>*/}
        {/*      <button className="text-gray-50">+</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">Sections spacing</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">indent</button>*/}
        {/*      <button className="text-gray-50">Section divider</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">Paper size</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">Zoom</button>*/}
        {/*    </div>*/}

        {/*    <div className="">*/}
        {/*      <button className="text-gray-50">Text color</button>*/}
        {/*      <button className="text-gray-50">Accent color</button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</header>*/}

        <main className="w-full flex justify-center py-6 overflow-x-auto">
          <div
            id="resume-pdf-canvas"
            className="w-[210mm] h-[297mm] bg-white  p-[10mm] shadow-2xl print:shadow-none print:m-0 flex flex-col box-border overflow-hidden"
          >
            <ResumeHeader
              formData={formData}
              templateId={"classic"}
            ></ResumeHeader>

            <TemplateSection
              formData={formData}
              templateId={"classic"}
            >
            </TemplateSection>

          </div>
        </main>
    </main>
  );
}
export default PreviewSection