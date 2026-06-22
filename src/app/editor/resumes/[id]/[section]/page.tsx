import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string, section: string }>;
  searchParams: Promise<{ name?: string; experience?: string }>;
}

export default async function ResumeDetailsPage({ params, searchParams }: PageProps) {
  const { id, section } = await params;
  const { name, experience } = await searchParams;


  return (
    <div className="w-full min-h-screen bg-gray-900 text-slate-100 p-8 font-sans antialiased">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Back Navigation Button */}
        <Link
          href="/editor/resumes"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors duration-150 uppercase tracking-wider"
        >
          ← Back to Resumes
        </Link>

        <main className="bg-gray-800 border border-slate-800/80 rounded-xl p-6 shadow-xl space-y-6">
          <div className="border-b border-slate-700/50 pb-4">
            <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono px-2 py-1 rounded-md uppercase tracking-wider">
              Resume ID: {id}
            </span>
            <h1 className="text-2xl font-bold text-slate-100 mt-3">
              {name || "Untitled Resume"}
            </h1>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Experience Level
              </h3>
              <p className="text-sm text-slate-200 bg-[#161f30] border border-slate-700/40 rounded-lg px-3 py-2 inline-block">
                💼 {experience || "Not specified"}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Resume Content Status
              </h3>
              <div className="p-4 bg-slate-900/50 border border-dashed border-slate-700 rounded-lg text-center text-xs text-slate-500">
                ✨ Click the "AI Resume Agent" to populate this workspace with custom tailored content.
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}