"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  { id: "top", label: "Back to top" },
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About the founder" },
  { id: "contact", label: "Get in touch" },
];

export function ScrollMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
        >
          {/* The Modal Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="bg-charcoal border border-[#5A4E44] rounded-2xl shadow-2xl overflow-hidden flex flex-col min-w-[220px] pointer-events-auto"
              >
                <div className="px-4 py-3 border-b border-[#3A332D]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D6C8B4] uppercase">Navigate</span>
                </div>
                {sections.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => handleClick(s.id)}
                    className={`px-5 py-3 text-left text-sm font-semibold text-sand hover:bg-[#2a2a2a] hover:text-clay transition-colors ${
                      i === 0 ? "border-b border-[#3A332D]/50" : ""
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Arrow Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Navigation menu"
            aria-expanded={isOpen}
            className="w-12 h-12 bg-charcoal text-ivory border border-[#5A4E44] rounded-full flex items-center justify-center shadow-xl hover:bg-clay hover:text-charcoal hover:border-clay transition-all duration-300 pointer-events-auto"
          >
            <motion.svg
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </motion.svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
