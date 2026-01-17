import React, { useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] backdrop-blur-sm shadow-md border-b border-gray-300/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-3xl font-semibold cursor-pointer tracking-normal">
            Hassan
          </div>

          <nav className="hidden md:flex text-sm items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#faqs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </a>
          </nav>

          <button className="hidden md:block px-6 py-2 bg-white text-gray-900 rounded hover:bg-gray-100 transition-all active:scale-x-95">
            Contact
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!ismenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/*  Mobile Menu*/}
        {ismenuOpen && (
          <nav className="md:hidden flex flex-col space-y-3 mt-4">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>

            <a
              href="#faqs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </a>
            <button className="px-6 py-2 bg-white text-gray-900 rounded hover:bg-gray-100 transition-colors w-fit">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
