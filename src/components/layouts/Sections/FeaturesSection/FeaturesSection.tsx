import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 border-2 border-gray-200 py-20 px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-sm font-mono font-bold uppercase tracking-wider text-neutral-700 mb-8">
            Our users get interviews at top tech companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale contrast-200 text-black">
            <span className="font-sans font-black text-2xl tracking-tighter">Google</span>
            <span className="font-serif font-bold text-2xl tracking-tight">Meta</span>
            <span className="font-sans font-semibold text-2xl tracking-tight">amazon</span>
            <span className="font-mono font-bold text-2xl">NETFLIX</span>
            <span className="font-sans font-bold text-2xl italic">Uber</span>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Built for screeners, not for designers.
          </h2>
          <p className="text-lg text-neutral-800 font-medium leading-relaxed">
            99% of resumes fail because they are too colorful or complex for automated systems. We fixed that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100/90 border-2 border-gray-200 p-8 rounded-2xl flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-black">The Google XYZ Formula</h3>
            <p className="text-neutral-800 text-base leading-relaxed">
              Our AI automatically rewrites weak statements into high-impact bullet points: "Accomplished [X], measured by [Y], by doing [Z]."
            </p>
          </div>

          <div className="bg-gray-100/90 border-2 border-gray-200 p-8 rounded-2xl flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-black">100% ATS-Compliant Layout</h3>
            <p className="text-neutral-800 text-base leading-relaxed">
              We enforce a strict, clean, single-column template based on the legendary Jake's Resume style. Automated systems will parse it flawlessly.
            </p>
          </div>

          <div className="bg-gray-100/90 border-2 border-gray-200 p-8 rounded-2xl flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-black">Instant PDF Export</h3>
            <p className="text-neutral-800 text-base leading-relaxed">
              No subscription gates or watermark traps. When you are done, click download and get a perfectly aligned PDF ready for submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;