"use client"

import {useEffect, useState} from "react";
import {IResumeContent} from "@/shared/interfaces/resume/IResume";
import {handleResumeContentGetter, handleResumeUpdate} from "@/server-actions/editor/resumes";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const CourseWork = ({ id, name, experience }: IContactSectionProps)=> {
  const [formData, setFormData] = useState<IResumeContent["coursework"]>({
    courseName: "",
    institution: "",
    date: "",
    skillsUsed: "",
    skillsApplied: ""
  });

  useEffect(() => {
    if (!id) return

    const getContent = async () => {
      try {
        const response = await handleResumeContentGetter(id);
        const content = response[0]?.content?.coursework;
        setFormData(content || {})
      } catch (error) {
        console.error("Error content downloading:", error);
      }
    }
    getContent()
  }, [id])

  const handleInputChange = (field: keyof IResumeContent["coursework"], value: string) => {
    setFormData((prev) => {
      const currentData = prev || {
        courseName: "",
        institution: "",
        date: "",
        skillsUsed: "",
        skillsApplied: ""
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
      const result  = await handleResumeUpdate(id, "coursework", formData)
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
              What was the course name?
            </label>
            <input
              type="text"
              value={formData?.courseName || ""}
              onChange={(e) => handleInputChange("courseName", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Where did you take the course?
            </label>
            <input
              type="text"
              value={formData?.institution || ""}
              onChange={(e) => handleInputChange("institution", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              When did you take it?
            </label>
            <input
              type="text"
              value={formData?.date || ""}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              What skill did you use?
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.skillsUsed || ""}
                onChange={(e) => handleInputChange("skillsUsed", e.target.value)}
                className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg ltr pr-10 pl-4 py-3 text-sm text-slate-200 outline-none transition-colors"
              />
              <span className="absolute right-4 text-slate-400 text-xs pointer-events-none">🔗</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              How was that skill applied?
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.skillsApplied || ""}
                onChange={(e) => handleInputChange("skillsApplied", e.target.value)}
                className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg ltr pr-10 pl-4 py-3 text-sm text-slate-200 outline-none transition-colors"
              />
              <span className="absolute right-4 text-slate-400 text-xs pointer-events-none">🔗</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-md transition-all duration-150 cursor-pointer"
          >
            Save Experience Info
          </button>
        </div>
      </form>
    </main>
  );
}
export default CourseWork