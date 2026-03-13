import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const sections = ["about", "projects", "skills", "writing", "contact"];

const NavBar = () => {
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-foreground/20 z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 flex items-center justify-between bg-background/80 backdrop-blur-md"
      >
        <a href="#" className="font-display text-lg font-semibold tracking-[-0.02em]">
          JD
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Skills", "Writing", "Contact"].map((item) => {
            const id = item.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative font-body text-[13px] transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
          <a
            href="mailto:hello@example.com"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hello@example.com
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
