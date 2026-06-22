import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-24 px-6 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-neutral-200 border border-neutral-200 px-3 py-1 rounded-full text-xs font-mono mb-6">
        <span>✨ 100% Free for Developers</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
        Free AI Resume Builder. <br />
        <span className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl text-neutral-500">ATS-optimized.</span> Recruiter-ready.
      </h1>

      <p className="mt-6 text-lg text-neutral-900 max-w-2xl leading-relaxed">
        Just paste your raw experience or type it out as it is. Our AI will transform it into a strict, no-fluff resume tailored to FAANG standards, guaranteed to pass automated screening systems (ATS).
      </p>

      <div className="mt-10 flex flex-col items-center gap-4">
        <button className="bg-gray-900 hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-xl text-base transition-all">
          Build My ATS Resume
        </button>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-white flex items-center justify-center font-mono font-bold text-[8px]">JD</div>
            <div className="w-6 h-6 rounded-full bg-neutral-300 border-2 border-white flex items-center justify-center font-mono font-bold text-[8px]">TL</div>
            <div className="w-6 h-6 rounded-full bg-neutral-400 border-2 border-white flex items-center justify-center font-mono font-bold text-[8px]">MK</div>
          </div>
          <span>Joined by 1,200+ developers this week</span>
        </div>
      </div>

      <p className="text-xs text-neutral-900 mt-4 font-mono">
        Sign up in seconds. PDF download is completely free.
      </p>
    </section>
  );
};

export default HeroSection;