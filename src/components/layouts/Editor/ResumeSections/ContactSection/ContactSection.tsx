"use client";

import { useState, useEffect } from "react";
import {handleResumeContentGetter, handleResumeUpdate} from "@/server-actions/editor/resumes";

import {IResumeContent} from "@/shared/interfaces/resume/IResume";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const ContactSection = ({ id, name, experience }: IContactSectionProps) => {
  const [formData, setFormData] = useState<IResumeContent["contact"]>({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
    personalWebsite: "",
    country: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    if (!id) return

    const getContent = async () => {
      try {
        const response = await handleResumeContentGetter(id);
        const content = response[0]?.content?.contact;
        setFormData(content || {})
      } catch (error) {
        console.error("Error content downloading:", error);
      }
    }
    getContent()
  }, [id])

  const handleInputChange = (field: keyof IResumeContent["contact"], value: string) => {
    setFormData((prev) => {
      const currentData = prev || {
        fullName: "",
        email: "",
        phoneNumber: "",
        linkedin: "",
        personalWebsite: "",
        country: "",
        state: "",
        city: "",
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
      const result  = await handleResumeUpdate(id, "contact", formData)

    } catch (error) {
      console.error("Error saving contact info:", error);
    }
  };

  return (
    <main className="w-full min-h-screen bg-gray-900  px-12 py-8 font-sans ">
      <form onSubmit={handleSave} className="space-y-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 items-end">
          {/* FULL NAME */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Full Name
            </label>
            <input
              type="text"
              value={formData?.fullName || ""}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* EMAIL ADDRESS */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              value={formData?.email || ""}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Phone Number
            </label>
            <input
              type="text"
              value={formData?.phoneNumber || ""}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* LINKEDIN URL */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              LinkedIn URL
            </label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={formData?.linkedin || ""}
                onChange={(e) => handleInputChange("linkedin", e.target.value)}
                className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg ltr pr-10 pl-4 py-3 text-sm text-slate-200 outline-none transition-colors"
              />
              <span className="absolute right-4 text-slate-400 text-xs pointer-events-none">🔗</span>
            </div>
          </div>

          {/* PERSONAL WEBSITE */}
          <div className="space-y-2">
            <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
              Personal Website or Relevant Link
            </label>
            <input
              type="text"
              value={formData?.personalWebsite || ""}
              onChange={(e) => handleInputChange("personalWebsite", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* COUNTRY */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
                Country
              </label>
            </div>
            <input
              type="text"
              value={formData?.country || ""}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* STATE */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
                State
              </label>
            </div>
            <input
              type="text"
              value={formData?.state || ""}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* CITY */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
                City
              </label>
            </div>
            <input
              type="text"
              value={formData?.city || ""}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-md transition-all duration-150 cursor-pointer"
          >
            Save Contact Info
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactSection;