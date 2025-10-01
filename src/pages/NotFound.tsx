import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const [avatarSrc, setAvatarSrc] = useState("/avatar.png");
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 md:w-96 aspect-square bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 aspect-square bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="group relative grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center rounded-2xl border border-border bg-card/70 backdrop-blur-md p-8 overflow-hidden">
            {/* Glow border on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "0 0 60px hsl(var(--ring)/0.25)" }} />

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto md:mx-0"
            >
              <img
                  src={avatarSrc}
                  onError={() => setAvatarSrc("/placeholder.svg")}
                  alt="Avatar"
                  className="w-full h-full object-contain"
                />
                {/* Accent blobs */}
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary/20 rounded-full blur-xl" />
              
            </motion.div>

            {/* Copy */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-6xl font-extrabold bg-gradient-primary bg-clip-text text-transparent"
              >
                404
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-2xl font-semibold"
              >
                {t("notFound.title")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-2 text-muted-foreground"
              >
                {t("notFound.copy")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-start justify-center"
              >
        <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow-primary">
                  <Link to="/">
          <Home className="mr-2 h-5 w-5" /> {t("notFound.home")}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary hover:bg-primary/10">
                  <Link to="/">
          <ArrowLeft className="mr-2 h-5 w-5" /> {t("notFound.back")}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
