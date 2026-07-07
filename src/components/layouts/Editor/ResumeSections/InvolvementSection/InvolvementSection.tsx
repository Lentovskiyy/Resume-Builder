"use client"

import {useEffect, useState} from "react";
import {IResumeContent} from "@/shared/interfaces/resume/IResume";
import {handleResumeContentGetter, handleResumeUpdate} from "@/server-actions/editor/resumes";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const InvolvementSection = ({ id, name, experience }: IContactSectionProps)=> {
  const [formData, setFormData] = useState<IResumeContent["involvement"]>({
    role: "",
    organization: "",
    startDate: "",
    endDate: "",
    college: "",
    description: ""
  });

  useEffect(() => {
    if (!id) return

    const getContent = async () => {
      try {
        const response = await handleResumeContentGetter(id);
        const content = response[0]?.content?.involvement;
        setFormData(content || {})
      } catch (error) {
        console.error("Error content downloading:", error);
      }
    }
    getContent()
  }, [id])

  const handleInputChange = (field: keyof IResumeContent["involvement"], value: string) => {
    setFormData((prev) => {
      const currentData = prev || {
        role: "",
        organization: "",
        startDate: "",
        endDate: "",
        college: "",
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
      const result  = await handleResumeUpdate(id, "involvement", formData)
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
              What was your role?
            </label>
            <input
              type="text"
              value={formData?.role || ""}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              For which organization did you work?
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
              How long were you with it, start?
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
              How long were you with it, end?
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
              At which college was it located?
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.college || ""}
                onChange={(e) => handleInputChange("college", e.target.value)}
                className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg ltr pr-10 pl-4 py-3 text-sm text-slate-200 outline-none transition-colors"
              />
              <span className="absolute right-4 text-slate-400 text-xs pointer-events-none">🔗</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              What did you do?
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.description || ""}
                onChange={(e) => handleInputChange("description", e.target.value)}
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
export default InvolvementSection