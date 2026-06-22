import Link from "next/link";

const SectionHeader = () => {

  return (
    <nav className="w-full  bg-gray-900 px-12 py-2 font-sans ">
      <ul className="flex justify-around items-center bg-gray-800 mt-4 py-3 px-6 rounded-xl max-w-5xl mx-auto">
        <li>
         <Link
           className="text-gray-50"
           href="/"
         >
           Contact
         </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Certification
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Coursework
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Involvement
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Summary
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-50"
            href="/"
          >
            Finish & Preview
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SectionHeader;