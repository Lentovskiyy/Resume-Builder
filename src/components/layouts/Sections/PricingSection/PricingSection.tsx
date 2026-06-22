import React from 'react';

const PricingSection = () => {
  return (
    <section className="mt-20 border-2 border-gray-300 py-20 px-16 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-950">
            Fair pricing. No monthly traps.
          </h2>
          <p className="text-lg text-gray-950 font-bold leading-relaxed">
            Build your resume completely free, or supercharge it with AI Polish Tokens. 1 Token = 1 AI bullet point rewrite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          <div className="border border-gray-950 bg-gray-50  p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-950 mb-1">Standard Dev</h3>
              <p className="text-sm text-gray-950 font-mono font-bold mb-6">Perfect to get started</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-950">$0</span>
                <span className="text-gray-950 text-sm font-black">/ free forever</span>
              </div>

              <ul className="space-y-4 text-base text-gray-950 font-semibold mb-8 list-disc list-inside">
                <li>1 Standard ATS template</li>
                <li>Unlimited manual text edits</li>
                <li>3 Free AI polish tokens</li>
                <li>100% Free PDF downloads</li>
              </ul>
            </div>

            <button className="w-full border-2 border-gray-950 bg-gray-50  hover:bg-gray-950 hover:text-gray-50  text-gray-950 font-black py-3 px-6 rounded-xl text-base transition">
              Build Free Resume
            </button>
          </div>

          <div className="border-4 border-gray-950 bg-gray-50  p-8 rounded-2xl flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gray-950 text-gray-50  text-xs font-black font-mono px-4 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-black text-gray-950 mb-1">Career Boost</h3>
              <p className="text-sm text-gray-950 font-mono font-bold mb-6">For active job hunting</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-950">$9</span>
                <span className="text-gray-950 text-sm font-black">/ 100 tokens</span>
              </div>

              <ul className="space-y-4 text-base text-gray-950 font-black mb-8 list-disc list-inside">
                <li>Everything in Standard Dev</li>
                <li>100 Google XYZ AI rewrites</li>
                <li>Tailor to specific job specs</li>
                <li>Unlock all premium layouts</li>
              </ul>
            </div>

            <button className="w-full bg-gray-950 hover:bg-neutral-800 text-gray-50  font-black py-3 px-6 rounded-xl text-base transition">
              Get Career Boost
            </button>
          </div>

          <div className="border border-gray-950 bg-gray-50  p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-gray-950 mb-1">Senior Suite</h3>
              <p className="text-sm text-gray-950 font-mono font-bold mb-6">Complete career system</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-gray-950">$24</span>
                <span className="text-gray-950 text-sm font-black">/ 250 tokens</span>
              </div>

              <ul className="space-y-4 text-base text-gray-950 font-semibold mb-8 list-disc list-inside">
                <li>Everything in Career Boost</li>
                <li>250 Google XYZ AI rewrites</li>
                <li>AI Cover Letter match uses</li>
                <li>LinkedIn profile overhaul tokens</li>
              </ul>
            </div>

            <button className="w-full border-2 border-gray-950 bg-gray-50 hover:bg-gray-950 hover:text-gray-50  text-gray-950 font-black py-3 px-6 rounded-xl text-base transition">
              Get Senior Suite
            </button>
          </div>

        </div>

        <p className="text-center text-sm font-mono text-gray-950 font-bold mt-12">
          Secure encryption handled via Stripe. Paid tokens never expire.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;