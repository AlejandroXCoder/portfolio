import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Atlas",
    description: "Sistema para gestión de proyectos formativos con arquitectura de microservicios y GraphQL.",
    stack: ["Spring Boot", "GraphQL", "MongoDB", "Next.js", "Tailwind", "Zustand"],
    gradient: "from-primary/20 to-secondary/20",
    github: "#",
  },
  {
    title: "Themis",
    description: "Sistema de gestión de novedades académicas con GraphQL API Gateway y Redux para estado global.",
    stack: ["Spring Boot", "GraphQL Gateway", "Next.js", "Tailwind", "Redux"],
    gradient: "from-secondary/20 to-accent/20",
    github: "#",
  },
  {
    title: "Ikernell",
    description: "Proyecto personal de gestión de proyectos con stack MERN completo y autenticación JWT.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    gradient: "from-accent/20 to-primary/20",
    github: "#",
  },
];

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Holographic glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`} />
              
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    {t("projects.github")}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary transition-all group/btn"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    {t("projects.demo")}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
