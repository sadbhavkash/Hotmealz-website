import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { LuFlame, LuMenu, LuX, LuArrowRight } from "react-icons/lu";

// Order must match the order of sections on the page
const links = [
  { label: "Home", id: "home", href: "#home" },
  { label: "About", id: "about", href: "#about" },
  { label: "Products", id: "products", href: "#products" },
  { label: "How it works", id: "how", href: "#how" },
  { label: "Contact", id: "company", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = l.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 h-1 origin-left bg-gradient-to-r from-brand to-gold z-[60]"
      />

      <header className="fixed top-3 inset-x-0 z-50 px-3">
        <nav
          className={`max-w-6xl mx-auto flex items-center justify-between h-14 rounded-full border backdrop-blur-xl px-3 sm:px-4 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 border-white shadow-lg shadow-black/10"
              : "bg-white/50 border-white/60"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-gold flex items-center justify-center text-white">
              <LuFlame size={18} />
            </span>
            <span className="font-display text-2xl tracking-wide leading-none">
              HOTT<span className="text-brand">MEALZZ</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  className={`relative block px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === l.id ? "text-white" : "text-gray-700 hover:text-brand"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-brand to-[#ff7a2f] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-brand/30 hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Enquire Now <LuArrowRight size={16} />
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {open ? <LuX size={20} /> : <LuMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden max-w-6xl mx-auto mt-2 rounded-3xl bg-white/90 backdrop-blur-xl border border-white shadow-xl p-3"
            >
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-2xl font-medium ${
                    active === l.id ? "bg-ink text-white" : "text-gray-800"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-[#ff7a2f] text-white font-semibold px-5 py-3 rounded-2xl"
              >
                Enquire Now <LuArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}