import React, { useContext, useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { ThemeContext } from "../Context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  const { storedValue, setStoredValue } = useContext(ThemeContext);

  console.log(storedValue);

  useEffect(() => {
    if (storedValue) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [storedValue]);

  console.log(storedValue);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-md border-b border-gray-300/30 ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`text-3xl font-semibold cursor-pointer tracking-normal`}
          >
            Hassan
          </div>

          <nav className="hidden md:flex text-md items-center space-x-8">
            <a
              style={{
                color: "var(--text-color)",
              }}
              href="#home"
              className="text-black hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            {/* <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a> */}
            <a
              style={{
                color: "var(--text-color)",
              }}
              href="#projects"
              className="text-black hover:text-gray-900 transition-colors"
            >
              Projects
            </a>

            <a
              style={{
                color: "var(--text-color)",
              }}
              href="#about"
              className="text-black hover:text-gray-900 transition-colors"
            >
              About
            </a>

            {/* <a
              style={{
                color: "var(--text-color)",
              }}
              href="#faqs"
              className="text-black hover:text-gray-900 transition-colors"
            >
              FAQs
            </a> */}
          </nav>

          <button
            style={{
              backgroundColor: "var(--text-color)",
              color: "var(--background-color)",
            }}
            className="hidden md:block px-6 py-2  text-white rounded hover:bg-gray-100 transition-all active:scale-x-95"
          >
            Contact
          </button>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!ismenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        <button
          className="flex absolute right-10 top-[40%]"
          onClick={() => setStoredValue(!storedValue)}
        >
          {storedValue ? <Moon /> : <Sun />}
        </button>

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
            <button className="px-6 py-2 bg-gray-400 text-gray-900 rounded hover:bg-gray-100 transition-colors w-fit">
              Contact
            </button>

            <button
              className="flex absolute right-10 top-[40%]"
              onClick={() => setStoredValue(!storedValue)}
            >
              {storedValue ? <Moon /> : <Sun />}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
