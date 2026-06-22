import Link from "next/dist/client/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-gray-300 bg-gray-200 px-16 py-12 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gray-950 flex items-center justify-center font-mono font-black text-xs text-gray-50 border border-gray-950">
              {"[ ]"}
            </div>
            <span className="text-base font-black text-gray-950 tracking-tight font-mono">
              TabOrganizer
            </span>
          </div>
          <p className="text-xs font-mono font-bold text-gray-600">
            © {currentYear} TabOrganizer. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <Link
            href="/terms"
            className="text-sm font-black text-gray-950 hover:text-neutral-700 transition underline decoration-2 decoration-gray-400 hover:decoration-gray-950"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-black text-gray-950 hover:text-neutral-700 transition underline decoration-2 decoration-gray-400 hover:decoration-gray-950"
          >
            Privacy Policy
          </Link>
          <Link
            href="/refund"
            className="text-sm font-black text-gray-950 hover:text-neutral-700 transition underline decoration-2 decoration-gray-400 hover:decoration-gray-950"
          >
            Refund Policy
          </Link>
          <Link
            href="mailto:support@taborganizer.com"
            className="text-sm font-black text-gray-950 hover:text-neutral-700 transition underline decoration-2 decoration-gray-400 hover:decoration-gray-950"
          >
            Contact Support
          </Link>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;