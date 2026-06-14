import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-5 left-0 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-full px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-[#6E8464]">
          Fathimath Rizwana
        </h1>

        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-[#8FA684]">Home</li>
          <li className="cursor-pointer hover:text-[#8FA684]">About</li>
          <li className="cursor-pointer hover:text-[#8FA684]">Skills</li>
          <li className="cursor-pointer hover:text-[#8FA684]">Projects</li>
          <li className="cursor-pointer hover:text-[#8FA684]">Contact</li>
        </ul>

        <button className="hidden md:block bg-[#8FA684] text-white px-6 py-3 rounded-full">
          Hire Me
        </button>

        <button className="md:hidden">
          <Menu size={32} />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;