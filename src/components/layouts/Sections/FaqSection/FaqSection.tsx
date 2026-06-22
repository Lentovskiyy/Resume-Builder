import React from 'react';

const FaqSection = () => {
  return (
    <section className="mt-20 border-2 border-gray-200 py-20 px-16 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-950">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-950 font-bold leading-relaxed">
            Have questions about how tokens work or how we handle your data? We have answers.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-950 bg-gray-200 p-6 rounded-2xl">
            <h3 className="text-lg font-black text-gray-950 mb-2">
              Do my AI Polish Tokens ever expire?
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              No. Any token pack you purchase stays linked to your account forever. If you buy 100 tokens today, use 20 of them, and come back two years from now to look for your next role, your remaining 80 tokens will be waiting for you.
            </p>
          </div>

          <div className="border border-gray-950 bg-gray-200 p-6 rounded-2xl">
            <h3 className="text-lg font-black text-gray-950 mb-2">
              Can I really download my resume completely for free?
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Yes, absolutely. We do not hide your final file behind a surprise paywall, and we do not add ugly watermarks. You can use our standard templates, type out your experience manually, and download the clean PDF completely free of charge.
            </p>
          </div>

          <div className="border border-gray-950 bg-gray-200 p-6 rounded-2xl">
            <h3 className="text-lg font-black text-gray-950 mb-2">
              What exactly counts as "1 Token"?
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              One token is consumed whenever you click "AI Optimize" on a specific resume bullet point or ask the system to rewrite a description block into the Google XYZ formula. Manual edits, changing layouts, or exporting PDFs do not use any tokens.
            </p>
          </div>

          <div className="border border-gray-950 bg-gray-200 p-6 rounded-2xl">
            <h3 className="text-lg font-black text-gray-950 mb-2">
              Will these templates pass rigid corporate ATS screeners?
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Yes. Our layouts are deliberately single-column, text-heavy, and built based on modern Applicant Tracking System (ATS) guidelines. We intentionally avoid columns, custom graphics, or skill progress bars because those are exactly what cause parsers to glitch out and reject you.
            </p>
          </div>

          <div className="border border-gray-950 bg-gray-200 p-6 rounded-2xl">
            <h3 className="text-lg font-black text-gray-950 mb-2">
              Is my personal data safe? Do you train models on my resume?
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Your personal data belongs entirely to you. We protect your connection with industry-standard encryption and securely process payment webhooks through Stripe. We do not sell your personal data or use your private resume strings to train third-party public models.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm font-mono text-gray-950 font-bold">
            Still have a custom question? Check us in social-media
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;