import Link from "next/link";

interface IHeaderProps {
  isLoggedIn: boolean;
}

const Header = (props: IHeaderProps) => {
  return (
    <header className="flex justify-between items-center px-16 py-4 bg-gray-600/20 border-b-2 border-gray-200/40 sticky top-0 z-50 backdrop-blur-sm backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center font-mono font-black text-sm text-white border border-gray-950">
          {"[ ]"}
        </div>
        <span className="text-xl font-black text-gray-950 tracking-tight font-mono">
          TabOrganizer
        </span>
      </Link>

      <div className="flex items-center gap-3">
        {/* First Button: Acts as Login for guests, or the sole primary button for users */}
        <Link
          href={props.isLoggedIn ? "/editor/resumes" : "/login"}
          className={
            props.isLoggedIn
              ? "border-2 border-gray-950 bg-gray-950 hover:bg-neutral-800 text-white font-black py-2 px-5 rounded-xl text-sm transition" // Nice dark look when it's the "Go to editor" button
              : "text-sm font-black text-gray-950 hover:text-neutral-700 px-4 py-2 transition" // Simple text look when it's just "Login"
          }
        >
          {props.isLoggedIn ? "Go to editor" : "Login"}
        </Link>

        {/* Second Button: ONLY renders if the user is NOT logged in */}
        {!props.isLoggedIn && (
          <Link
            href="/signup"
            className="border-2 border-gray-950 bg-gray-50 hover:bg-gray-950 hover:text-white text-gray-950 font-black py-2 px-5 rounded-xl text-sm transition"
          >
            Sign Up Free
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;