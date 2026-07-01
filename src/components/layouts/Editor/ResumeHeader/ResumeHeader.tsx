"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ResumeHeader = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;

    return isActive
      ? "bg-indigo-500 text-gray-50 px-3 py-1.5 rounded-md uppercase text-sm font-mono tracking-wider font-bold"
      : "text-slate-400 hover:text-gray-50 px-3 py-1.5 rounded-md uppercase text-sm transition-colors duration-0 font-mono tracking-wider font-bold";
  };

  return (
    <header className="bg-gray-900 flex px-6 py-4 items-center justify-between w-full">
      <div className="flex items-center gap-1 bg-[#161f30] border border-slate-800 p-1 rounded-lg text-xs">
        <Link href="/editor/resumes" className={getLinkClass("/editor/resume")}>
          Resumes
        </Link>
        <Link href="/editor/cover-letters" className={getLinkClass("/editor/cover-letters")}>
          Cover Letters
        </Link>
        <Link href="/editor/resignation-letters" className={getLinkClass("/editor/resignation-letters")}>
          Resignation Letters
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <button type="button" className="flex items-center px-4 py-2 bg-indigo-400 hover:bg-indigo-500 text-slate-900 hover:text-slate-300 font-black text-sm tracking-widest uppercase rounded-lg transition-colors duration-0">
          Upgrade
        </button>

        {/* AI Helper Emblem */}
        <button type="button" className="text-slate-400 hover:text-gray-50 text-lg transition-colors duration-0">
          🤖
        </button>

        {/* Notifications Hub */}
        <button type="button" className="text-slate-400 hover:text-gray-50 text-lg relative transition-colors duration-0">
          🔔
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
        </button>

        {/* Profile Dropdown Trigger */}
        <div className="flex items-center gap-1.5 bg-[#1d293e] border border-slate-800/60 p-1 pr-2 rounded-full cursor-pointer hover:bg-slate-800/50 transition-colors duration-0">
          <div className="w-10 h-10 rounded-full bg-indigo-400 flex items-center justify-center text-slate-950 font-black text-xs">
            R
          </div>
          <span className="text-[10px] text-slate-400">▼</span>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;