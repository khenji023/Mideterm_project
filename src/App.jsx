import { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reflection from "./components/Reflection";

const SECTIONS = ["about", "skills", "projects", "reflection"];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = SECTIONS[0];
      SECTIONS.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-purple-600 text-white p-4 flex justify-between items-center shadow z-50">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-gray-200 transition-colors ${
                activeSection === section ? "underline" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-purple-600 flex flex-col items-center gap-4 py-6 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {SECTIONS.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`hover:text-gray-200 transition-colors ${
              activeSection === section ? "underline" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      {/* Sections */}
      <div className="pt-20">
        {SECTIONS.map((section) => {
          const Component =
            section === "about"
              ? About
              : section === "skills"
              ? Skills
              : section === "projects"
              ? Projects
              : Reflection;
          return (
            <section key={section} id={section}>
              <Component />
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default App;