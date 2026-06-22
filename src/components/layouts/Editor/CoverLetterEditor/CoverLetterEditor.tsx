import React from "react";
import UploadCard from "@/components/ui/UploadCard/UploadCard";

const CoverLetterEditor = () => {
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
          <h2 className="text-base font-bold text-slate-100">Cover Letters</h2>

          <div className="flex items-center gap-3">
            <button type="button" className="flex items-center gap-2 bg-[#192231] border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider font-mono uppercase text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-0">
              Created <span className="text-slate-500 text-[8px]">▼</span>
            </button>

            <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3">
              <button type="button" className="text-slate-500 hover:text-slate-300 p-1 transition-colors duration-0" title="Grid view">
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

        <UploadCard label="Create new Cover Letter"/>
      </main>
    </div>

  )
}

export default CoverLetterEditor;