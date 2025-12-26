import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[88vh] md:min-h-screen relative overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 md:w-96 aspect-square bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 aspect-square bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 text-center md:text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t("hero.role")}
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl md:max-w-none mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t("hero.summary")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
              >
                <a href="/CV%20-%20David%20Carrion.pdf" download="CV - David Carrion.pdf" aria-label="Descargar CV en PDF">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  {t("hero.ctaCv")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-primary hover:bg-primary/10 group"
              >
                {t("hero.ctaProjects")}
                <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 order-first md:order-none"
          >
            <div className="relative mx-auto w-90 h-90 md:w-100 md:h-100">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-primary opacity-30 blur-3xl" aria-hidden="true" />

              

                {/* Replace src with your transparent PNG avatar */}
                <img
                  src="/avatar.png"
                  alt="Avatar"
                  className="relative z-10 w-5/5 h-5/5 object-contain"
                />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-7 w-7 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};
