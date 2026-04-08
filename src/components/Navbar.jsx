import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-6 w-full bg-transparent z-10 relative z-10">
      {/* 1. UNIQUE LOGO DESIGN */}
      <div className="flex-1">
        <a href="#home" className="group flex items-center gap-1">
          <span className="text-2xl font-black tracking-tighter text-white">
            Ralph
          </span>
          <span className="text-2xl font-black tracking-tighter text-purple-500 group-hover:text-cyan-400 transition-colors duration-300">
            X
          </span>
          <div className="h-1 w-1 rounded-full bg-cyan-400 mt-3 animate-pulse"></div>
        </a>
      </div>

      {/* 2. DESKTOP NAV (Hidden on Mobile) */}
      <div className="hidden md:flex flex-1 justify-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative group text-gray-300 hover:text-white transition text-sm font-medium"
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* RESTORED ORIGINAL CTA STYLE */}
      <div className="hidden md:flex flex-1 justify-end">
        <a
          href="/Resume.pdf.pdf"
          download="Ralph_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-purple-400 rounded-md text-sm hover:bg-purple-400 hover:text-black transition duration-300"
        >
          Download Resume
        </a>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden z-[60] flex flex-col justify-center items-center gap-1.5 p-2 w-10 h-10 relative"
      >
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* SIDEBAR (80% Width, Left Aligned) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] z-50 bg-[#0f0f1a] border-l border-gray-800 p-10 flex flex-col items-start justify-start gap-8 md:hidden"
            >
              <div className="flex items-center gap-0.5 mb-10">
                <h2 className="text-xl font-bold text-white">
                  Ralph
                  <span className="text-2xl font-black tracking-tighter text-purple-500 group-hover:text-cyan-400 transition-colors duration-300">
                    X
                  </span>
                </h2>
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2"></div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-300 hover:text-purple-400 transition w-full text-left"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/Resume.pdf.pdf"
                download="Ralph_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-purple-400 rounded-md hover:bg-purple-400 hover:text-black transition"
              >
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
