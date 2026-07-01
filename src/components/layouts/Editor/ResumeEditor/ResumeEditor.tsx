"use client";

import UploadCard from "@/components/ui/UploadCard/UploadCard";
import ResumeCard from "@/components/ui/ResumeCard/ResumeCard";
import { useState, useEffect } from "react";
import {handleResumeCreation, handleResumeGetter} from "@/server-actions/editor/resumes";


import { useRouter } from "next/navigation";

interface IResumeItem {
  id: string;
  name: string;
  experience: string;
}

const ResumeEditor =  () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedExperience, setSelectedExperience] = useState<string>("Select...");
  const [resumeName, setResumeName] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [resumes, setResumes] = useState<IResumeItem[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await handleResumeGetter();
        setResumes(data || []);
      } catch (error) {

      } finally {
        setIsLoading(false);
      }
    };

    fetchResumes()
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openCreateModal = () => {
    setIsOpen(!isOpen);
    if (isDropdownOpen) setIsDropdownOpen(false);

    if (isOpen) {
      setResumeName("");
      setSelectedExperience("Select...");
    }
  };

  const isFormValid = resumeName.trim() !== "" && selectedExperience !== "Select...";

  const onSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!isFormValid) return;

    try {
      const newId = await handleResumeCreation({name: resumeName, experience: selectedExperience})

      const newResume: IResumeItem = {
        id: newId,
        name: resumeName,
        experience: selectedExperience
      };

      setResumes((prevResumes) => [newResume, ...prevResumes]);

      setIsOpen(false);
      setResumeName("");
      setSelectedExperience("Select...");
    } catch {
      throw new Error("Error creating Resume");
    }
  };

  const onResumeClick = (resume: IResumeItem) => {
    const queryParams = new URLSearchParams({
      name: resume.name,
      experience: resume.experience
    }).toString();

    router.push(`/editor/resumes/${resume.id}/contact?${queryParams}`);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 px-6 py-2 font-sans antialiased">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#192231] hover:bg-gray-800 border border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-indigo-900 transition-all duration-0 group cursor-pointer">
          <div className="text-xl text-indigo-400 bg-indigo-500/10 p-2 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-0">✨</div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 mb-0.5">AI Resume Agent</h3>
            <p className="text-xs text-slate-400">Our most powerful AI resume tool</p>
          </div>
        </div>

        <div className="bg-[#192231] hover:bg-gray-800 border border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-indigo-900 transition-all duration-0 group cursor-pointer">
          <div className="text-xl text-indigo-400 bg-indigo-500/10 p-2 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-0">💼</div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 mb-0.5">AI Training Jobs</h3>
            <p className="text-xs text-slate-400">The easiest way to earn money online</p>
          </div>
        </div>

        <div className="bg-[#192231] hover:bg-gray-800 border border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-indigo-900 transition-all duration-0 group cursor-pointer">
          <div className="text-xl text-indigo-400 bg-indigo-500/10 p-2 rounded-lg group-hover:bg-indigo-500/20 transition-colors duration-0">📹</div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 mb-0.5">AI Interview</h3>
            <p className="text-xs text-slate-400">A new way to practice interviewing</p>
          </div>
        </div>
      </section>

      <main className="bg-gray-800 border border-slate-800/80 rounded-xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-bold text-slate-100">Resumes</h2>

          <div className="flex items-center gap-3">
            <button type="button" className="flex items-center gap-2 bg-[#192231] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider font-mono uppercase text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-0">
              Created <span className="text-slate-500 text-[8px]">▼</span>
            </button>

            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3">
              <button type="button" className="text-slate-300 p-1 transition-colors duration-0" title="Grid view">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
                </svg>
              </button>
              <button type="button" className="text-slate-500 hover:text-slate-300 p-1 transition-colors duration-0" title="List view">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                  <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <UploadCard onClick={openCreateModal} label="Create new Resume"/>

          {resumes.map((resume, index) => (
            <ResumeCard onClick={() => onResumeClick(resume)} key={resume.id || index} label={resume.name} />
          ))}
        </div>
      </main>

      {isOpen && (
        <div
          onClick={openCreateModal}
          className="fixed inset-0 bg-[#0c111d]/60 flex items-center justify-center z-100 p-4 font-sans"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1f293d] border border-slate-700/60 w-full max-w-xl rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-700/30 flex items-center justify-between">
              <h3 className="text-md font-bold text-slate-100 tracking-wide">
                Create a resume
              </h3>
              <button
                onClick={openCreateModal}
                className="text-slate-400 hover:text-slate-200 transition-colors duration-0 text-sm cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="p-6 space-y-5">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-300">
                  RESUME NAME <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={resumeName}
                  onChange={(e) => setResumeName(e.target.value)}
                  placeholder="First Name - Job Title"
                  className="w-full bg-[#161f30] border border-indigo-500/40 focus:border-indigo-500 rounded-md px-3 py-2 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors duration-0"
                />
              </div>

              <div className="space-y-1.5 relative">
                <label className="block text-[11px] font-bold tracking-wider uppercase text-slate-300">
                  EXPERIENCE
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-[#161f30] border border-slate-700/50 rounded-md px-3 py-2 text-sm text-left flex items-center justify-between outline-none transition-colors duration-0 cursor-pointer text-slate-300 focus:border-indigo-500"
                  >
                    <span className={selectedExperience === "Select..." ? "text-slate-500" : "text-slate-200"}>
                      {selectedExperience}
                    </span>
                    <span className="text-slate-400 text-[9px]">▼</span>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-[#161f30] border border-slate-700/60 rounded-md shadow-xl z-50 overflow-hidden">
                      <ul className="text-sm text-slate-300">
                        <li
                          onClick={() => {
                            setSelectedExperience("Entry Level (0-2 years)");
                            setIsDropdownOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-[#1f293d] hover:text-gray-50 cursor-pointer transition-colors duration-0"
                        >
                          Entry Level (0-2 years)
                        </li>
                        <li
                          onClick={() => {
                            setSelectedExperience("Mid Level (2-5 years)");
                            setIsDropdownOpen(false);
                          }}
                          className="px-3 py-2 border-t border-slate-800/40 hover:bg-[#1f293d] hover:text-gray-50 cursor-pointer transition-colors duration-0"
                        >
                          Mid Level (2-5 years)
                        </li>
                        <li
                          onClick={() => {
                            setSelectedExperience("Senior Level (5+ years)");
                            setIsDropdownOpen(false);
                          }}
                          className="px-3 py-2 border-t border-slate-800/40 hover:bg-[#1f293d] hover:text-gray-50 cursor-pointer transition-colors duration-0"
                        >
                          Senior Level (5+ years)
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-slate-300 flex items-center gap-1 transition-colors duration-0">
                  IMPORT YOUR EXISTING RESUME
                </span>
                <div className="w-full bg-[#161f30] border border-slate-700/50 rounded-md px-3 py-2 flex items-center justify-between text-sm text-slate-600 cursor-pointer hover:border-slate-600 transition-colors duration-0">
                  <span className="text-slate-400">Upload PDF, DOCx resume file</span>
                  <span className="text-slate-400 text-xs">📤</span>
                </div>
              </div>
            </form>

            <div className="p-4 border-t border-slate-700/30 flex items-center justify-between gap-3 bg-[#1c2436]">
              <button
                type="button"
                onClick={openCreateModal}
                className="px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase border border-slate-700/80 hover:border-slate-600 text-slate-300 hover:text-white bg-[#161f30] rounded-md transition-all duration-0 cursor-pointer"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onSubmit}
                  className={`px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase rounded-md flex items-center gap-1.5 transition-all duration-150 ${
                    isFormValid
                      ? "text-indigo-100 bg-indigo-600 border border-indigo-500 hover:bg-indigo-500 hover:border-indigo-400 cursor-pointer shadow-md"
                      : "text-slate-400 bg-slate-800/40 border border-slate-700/40 cursor-not-allowed opacity-70"
                  }`}
                  disabled={!isFormValid}
                >
                  <span>✨</span> Use AI Resume Agent
                </button>
                <button
                  type="button"
                  onClick={onSubmit}
                  className={`px-4 py-1.5 text-[10px] font-bold tracking-wider uppercase rounded-md transition-all duration-150 ${
                    isFormValid
                      ? "text-white bg-blue-600 border border-blue-500 hover:bg-blue-400 hover:border-blue-400 cursor-pointer shadow-md"
                      : "text-slate-500 bg-slate-800/40 border border-slate-700/40 cursor-not-allowed opacity-70"
                  }`}
                  disabled={!isFormValid}
                >
                  Create resume
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeEditor;