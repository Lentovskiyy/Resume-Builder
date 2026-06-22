"use client";

import React from 'react';
import Link from "next/link";

const SidebarEditor = () => {
  return (
    <aside className="w-full h-full bg-[#121824] border-r border-slate-800 p-5 flex flex-col select-none antialiased">
      <div className="px-2">
        <Link
          href="/my-app/public"
          className="text-2xl font-black font-mono tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-gray-50 via-slate-100 to-slate-300 uppercase"
        >
          Rezi<span className="text-indigo-400 font-sans">.</span>
        </Link>
      </div>

      <div className="mt-8 space-y-6">
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2.5 p-3 rounded-lg border border-indigo-500/40 bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 font-mono font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
        >
          <span className="text-sm">💻</span>
          <span className="font-bold text-gray-50">Create new resume</span>
        </button>

        <div className="space-y-1.5">
          <button
            type="button"
            className="w-full flex items-center gap-3.5 p-3 rounded-lg border border-indigo-500/30 bg-[#1e1b4b]/50 font-mono font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(99,102,241,0.05)]"
          >
            <span className="text-base text-indigo-400">📊</span>
            <span className="font-bold tracking-wide text-white uppercase">My Dashboard</span>
          </button>

          {/* AI Resume Agent */}
          <button
            type="button"
            className="w-full flex items-center justify-between p-3 rounded-lg font-mono font-bold text-xs border border-transparent transition-all duration-200 group hover:border-indigo-500/50 hover:bg-indigo-950 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <div className="flex items-center gap-3.5">
              <span className="text-base text-slate-400 group-hover:text-white transition-colors duration-200">🤖</span>
              <span className="font-bold tracking-wide text-slate-200 group-hover:text-white uppercase transition-colors duration-200">
                AI Resume Agent
              </span>
            </div>
            <span className="text-[9px] font-black tracking-widest uppercase bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-all duration-200">
              New
            </span>
          </button>

          {/* AI Interview */}
          <button
            type="button"
            className="w-full flex items-center justify-between p-3 rounded-lg font-mono font-bold text-xs border border-transparent transition-all duration-200 group hover:border-indigo-500/50 hover:bg-indigo-950 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <div className="flex items-center gap-3.5">
              <span className="text-base text-slate-400 group-hover:text-white transition-colors duration-200">🎙️</span>
              <span className="font-bold tracking-wide text-slate-200 group-hover:text-white uppercase transition-colors duration-200">
                AI Interview
              </span>
            </div>
            <span className="text-[9px] font-black tracking-widest uppercase bg-emerald-400/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 group-hover:bg-white/20 group-hover:text-white group-hover:border-white/40 transition-all duration-200">
              New
            </span>
          </button>

          {/* Job Search */}
          <button
            type="button"
            className="w-full flex items-center gap-3.5 p-3 rounded-lg font-mono font-bold text-xs border border-transparent transition-all duration-200 group hover:border-indigo-500/50 hover:bg-indigo-950 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <span className="text-base text-slate-400 group-hover:text-white transition-colors duration-200">🔍</span>
            <span className="font-bold tracking-wide text-slate-200 group-hover:text-white uppercase transition-colors duration-200">
              Job search
            </span>
          </button>

          {/* Sample Library */}
          <button
            type="button"
            className="w-full flex items-center gap-3.5 p-3 rounded-lg font-mono font-bold text-xs border border-transparent transition-all duration-200 group hover:border-indigo-500/50 hover:bg-indigo-950 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <span className="text-base text-slate-400 group-hover:text-white transition-colors duration-200">📚</span>
            <span className="font-bold tracking-wide text-slate-200 group-hover:text-white uppercase transition-colors duration-200">
              Sample Library
            </span>
          </button>

          {/* Review My Resume */}
          <button
            type="button"
            className="w-full flex items-center gap-3.5 p-3 rounded-lg font-mono font-bold text-xs border border-transparent transition-all duration-200 group hover:border-indigo-500/50 hover:bg-indigo-950 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
          >
            <span className="text-base text-slate-400 group-hover:text-white transition-colors duration-200">✨</span>
            <span className="font-bold tracking-wide text-slate-200 group-hover:text-white uppercase transition-colors duration-200">
              Review my resume
            </span>
          </button>
        </div>
      </div>

      <div className="mt-auto w-full space-y-3 pt-4">
        <div className="border border-slate-800 bg-[#161f30] p-4 rounded-xl space-y-3 font-mono">
          <div className="flex justify-between items-center text-[11px] uppercase tracking-wide">
            <span className="text-slate-400">System.resumes</span>
            <span className="text-slate-200 font-bold font-sans">0 / 1</span>
          </div>
          {/*<div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-[1px]">*/}
          {/*  <div className="w-[20%] h-full bg-slate-400 rounded-full" />*/}
          {/*</div>*/}

          <div className="flex justify-between items-center text-[11px] uppercase tracking-wide">
            <span className="text-slate-400">AI.generations</span>
            <span className="text-slate-200 font-bold font-sans">0 / 10</span>
          </div>
          {/*<div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden p-[1px]">*/}
          {/*  <div className="w-[50%] h-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />*/}
          {/*</div>*/}

        </div>

        <button
          type="button"
          className="w-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 font-mono font-bold py-2.5 px-4 rounded-xl text-xs tracking-widest uppercase transition-colors duration-150"
        >
          <span className="text-amber-400 font-bold">⚡ Upgrade Account</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarEditor;