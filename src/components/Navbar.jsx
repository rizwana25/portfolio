import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-3 md:top-5 left-0 w-full z-50 px-3 md:px-4">
      <div
        className="
        max-w-7xl
        mx-auto
        bg-white/95
        backdrop-blur-sm
        shadow-lg
        rounded-full
        px-5
        md:px-8
        py-3
        md:py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <a
          href="#home"
          className="
          text-base
          sm:text-lg
          md:text-2xl
          font-bold
          text-[#6E8464]
          "
        >
          Fathimath Rizwana
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <li>
            <a href="#home" className="hover:text-[#8FA684] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#8FA684] transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-[#8FA684] transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#8FA684] transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#8FA684] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hire Me */}
        <a
          href="https://wa.me/918139055063"
          target="_blank"
          rel="noreferrer"
          className="
          hidden
          md:block
          bg-[#8FA684]
          text-white
          px-6
          py-3
          rounded-full
          hover:opacity-90
          transition
          "
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
          md:hidden
          mt-3
          mx-2
          bg-white
          rounded-3xl
          shadow-xl
          p-6
          "
        >
          <div className="flex flex-col gap-5 text-gray-700 font-medium">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#8FA684]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#8FA684]"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#8FA684]"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#8FA684]"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#8FA684]"
            >
              Contact
            </a>

            <a
              href="https://wa.me/918139055063"
              target="_blank"
              rel="noreferrer"
              className="
              bg-[#8FA684]
              text-white
              text-center
              py-3
              rounded-xl
              mt-2
              "
            >
              Hire Me
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;