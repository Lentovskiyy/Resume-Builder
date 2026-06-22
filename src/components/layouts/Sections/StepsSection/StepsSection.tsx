import React from 'react';

const StepsSection = () => {
  return (
    <section className="mt-20 border-2 border-gray-200 py-20 px-12 ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-gray-950">
            Three simple steps to a FAANG-grade resume.
          </h2>
          <p className="text-lg text-gray-950 font-bold leading-relaxed">
            No endless setup wizards or confusing profile settings. Just type your experience and get an official layout ready to apply in 5 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          <div className="flex flex-col">
            <div className="text-5xl font-black text-gray-950 font-mono mb-4 border-b-2 border-gray-950 pb-2">
              01
            </div>
            <h3 className="text-xl font-black text-gray-950 mb-2">
              Paste Raw Experience
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Drop in your messy notes, your old out-of-date bullet points, or just raw text about what you did at your last engineering job.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="text-5xl font-black text-gray-950 font-mono mb-4 border-b-2 border-gray-950 pb-2">
              02
            </div>
            <h3 className="text-xl font-black text-gray-950 mb-2">
              Run Google XYZ Polish
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Our specialized tech AI rephrases every single sentence to focus on hard metrics, key technical skills, and active impact verbs.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="text-5xl font-black text-gray-950 font-mono mb-4 border-b-2 border-gray-950 pb-2">
              03
            </div>
            <h3 className="text-xl font-black text-gray-950 mb-2">
              Download Clean PDF
            </h3>
            <p className="text-base text-gray-950 font-semibold leading-relaxed">
              Get an instantly generated, perfectly aligned standard resume template that looks like a high-end LaTeX layout. Ready for screening.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSection;