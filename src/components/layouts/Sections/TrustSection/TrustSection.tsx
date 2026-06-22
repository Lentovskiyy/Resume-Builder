import React from 'react';

const TrustSection = () => {
  return (
    <section className="mt-20 border-2 border-gray-200 py-20 px-12 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 ">
            See why 4,000+ engineers skipped the screening queue.
          </h2>
          <p className="text-lg  font-bold leading-relaxed">
            We don't do flashy graphics or progress bars. We focus strictly on the text quality that corporate hiring algorithms and busy recruiters look for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-4">
          <div className="border  bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-4 text-sm font-mono font-bold uppercase text-red-600">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Before DevResume (What most people write)
            </div>
            <h3 className="text-xl font-extrabold  mb-4">Software Engineer at Startup</h3>
            <ul className="space-y-4 text-base  font-semibold list-disc list-inside">
              <li>Responsible for writing backend APIs using Node.js and Express.</li>
              <li>Fixed database performance bugs and made queries run faster.</li>
              <li>Worked closely with the frontend team to build new web features.</li>
            </ul>
          </div>

          <div className="border-2 border-gray-950 bg-gray-50 p-8 rounded-2xl shadow-sm relative">
            <div className="absolute -top-3 right-6 bg-gray-950 text-gray-50 text-xs font-bold font-mono px-3 py-1 rounded-full uppercase">
              AI Optimized (Google XYZ Rule)
            </div>
            <div className="flex items-center gap-2 mb-4 text-sm font-mono font-bold uppercase text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              After DevResume (What recruiters want)
            </div>
            <h3 className="text-xl font-extrabold text-gray-950 mb-4">Software Engineer at Startup</h3>
            <ul className="space-y-4 text-base text-gray-950 font-black list-disc list-inside">
              <li>Designed and scaled 12+ critical Node.js microservices, boosting API system availability to 99.95%.</li>
              <li>Optimized PostgreSQL query execution paths, reducing database response latency by 42% under peak load.</li>
              <li>Collaborated across 3 cross-functional teams to deliver 5 high-priority features 2 weeks ahead of schedule.</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border-t-2 border-gray-200 pt-6">
          <div className="flex flex-col justify-between p-6 border-2 border-gray-300 bg-gray-200">
            <p className="text-lg text-gray-950 font-black italic leading-relaxed">
              "I applied to 40 roles with my old resume and got zero replies. Spent 10 minutes rewriting my bullet points here using the XYZ formula, applied to 10 more companies, and got 3 recruiter screeners in the same week."
            </p>
            <div className="mt-6">
              <p className="text-base font-extrabold text-gray-950">Marc-André L.</p>
              <p className="text-sm font-mono text-gray-950 font-black">Senior Frontend Engineer</p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 border-2 border-gray-300 bg-gray-200">
            <p className="text-lg text-gray-950 font-black italic leading-relaxed">
              "As a tech recruiter, I instantly reject resumes with multi-column templates, profile pictures, or skill bars. This tool generates the exact clean, text-heavy LaTeX layout that safely passes our ATS tracker every single time."
            </p>
            <div className="mt-6">
              <p className="text-base font-extrabold text-gray-950">Sarah D.</p>
              <p className="text-sm font-mono text-gray-950 font-black">Technical Recruiter @ Scale AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;