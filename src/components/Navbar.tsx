import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent"
        >
          DC
        </motion.div>

        <div className="flex items-center gap-6">
          {["about", "projects", "experience", "contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item)}
              className="capitalize text-sm font-medium text-foreground/80 hover:text-primary transition-colors hidden md:block"
            >
              {item}
            </motion.button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
