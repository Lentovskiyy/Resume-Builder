"use client"

import {useEffect, useState} from "react";
import {IResumeContent} from "@/shared/interfaces/resume/IResume";
import {handleResumeContentGetter, handleResumeUpdate} from "@/server-actions/editor/resumes";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const ProjectSection = ({ id, name, experience }: IContactSectionProps)=> {
  const [formData, setFormData] = useState<IResumeContent["projects"]>({
    title: "",
    organization: "",
    startDate: "",
    endDate: "",
    projectUrl: "",
    description: ""
  });

  useEffect(() => {
    if (!id) return

    const getContent = async () => {
      try {
        const response = await handleResumeContentGetter(id);
        const content = response[0]?.content?.projects;
        setFormData(content || {})
      } catch (error) {
        console.error("Error content downloading:", error);
      }
    }
    getContent()
  }, [id])

  const handleInputChange = (field: keyof IResumeContent["projects"], value: string) => {
    setFormData((prev) => {
      const currentData = prev || {
        title: "",
        organization: "",
        startDate: "",
        endDate: "",
        projectUrl: "",
        description: ""
      };

      return {
        ...currentData,
        [field]: value
      };
    });
  };

  const handleSave = async (e: React.FormEvent)  => {
    e.preventDefault();

    try {
      const result  = await handleResumeUpdate(id, "projects", formData)
    } catch (error) {
      console.error("Error saving contact info:", error);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-900  px-12 py-8 font-sans ">
      <form onSubmit={handleSave} className="space-y-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 items-end">
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Give your project a title
            </label>
            <input
              type="text"
              value={formData?.title || ""}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              In which organization did you do it?
            </label>
            <input
              type="text"
              value={formData?.organization || ""}
              onChange={(e) => handleInputChange("organization", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              How long were you working with, start?
            </label>
            <input
              type="text"
              value={formData?.startDate || ""}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              How long were you working with, end?
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.endDate || ""}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
                className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg ltr pr-10 pl-4 py-3 text-sm text-slate-200 outline-none transition-colors"
              />
              <span className="absolute right-4 text-slate-400 text-xs pointer-events-none">🔗</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Project URL
            </label>
            <input
              type="text"
              value={formData?.projectUrl || ""}
              onChange={(e) => handleInputChange("projectUrl", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Now describe what you did
            </label>
            <input
              type="text"
              value={formData?.description || ""}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-md transition-all duration-150 cursor-pointer"
          >
            Save Project Info
          </button>
        </div>
      </form>
    </main>
  );
}
export default ProjectSection