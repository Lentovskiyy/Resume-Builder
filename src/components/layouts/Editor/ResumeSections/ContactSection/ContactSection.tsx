"use client";

import { useState } from "react";

interface IContactSectionProps {
  id: string;
  name: string;
  experience: string;
}

const ContactSection = ({ id, name, experience }: IContactSectionProps) => {
  // 1. Инициализируем стейт для всех полей формы
  const [formData, setFormData] = useState({
    fullName: "FFEsfes",
    email: "awdwd@Gmail.com",
    phone: "44322424",
    linkedin: "https://linkedin.com/in/",
    website: "wadawaad",
    country: "Albania",
    state: "wadawd",
    city: "awdadadwa",
  });

  const [showCountry, setShowCountry] = useState(true);
  const [showState, setShowState] = useState(true);
  const [showCity, setShowCity] = useState(true);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving basic info:", { formData, showCountry, showState, showCity, resumeId: id });
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
              value={formData.fullName}
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
              value={formData.email}
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
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
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
                value={formData.linkedin}
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
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* COUNTRY */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-400">
                Country
              </label>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500">Show on resume</span>
                <input
                  type="checkbox"
                  checked={showCountry}
                  onChange={(e) => setShowCountry(e.target.checked)}
                  className="w-7 h-4 bg-slate-700 checked:bg-indigo-500 rounded-full cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
            <input
              type="text"
              value={formData.country}
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
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500">Show on resume</span>
                <input
                  type="checkbox"
                  checked={showState}
                  onChange={(e) => setShowState(e.target.checked)}
                  className="w-7 h-4 bg-slate-700 checked:bg-indigo-500 rounded-full cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              className="w-full bg-[#161f30] border border-slate-700/50 focus:border-indigo-500 rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            />
          </div>

          {/* CITY */}
          <div className="space-y-2">
            <input
              type="text"
              value={formData.city}
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