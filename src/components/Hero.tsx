import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            David Alejandro Carrión Rincón
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fullstack Developer | Spring Boot + Next.js + GraphQL
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Tecnólogo en Análisis y Desarrollo de Software certificado por el SENA. 
            Desarrollador fullstack con experiencia en proyectos reales usando 
            arquitecturas de microservicios y GraphQL. Apasionado por construir 
            soluciones escalables y modernas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Descargar CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-primary hover:bg-primary/10 group"
            >
              Ver Proyectos
              <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};
