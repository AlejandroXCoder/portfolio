import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const timeline = [
  {
    year: "2025",
    title: "Tecnólogo en Análisis y Desarrollo de Software",
    organization: "SENA",
    type: "education",
    description: "Certificado en desarrollo de software con enfoque en arquitecturas modernas.",
  },
  {
    year: "2024",
    title: "Fullstack Developer",
    organization: "Fábrica de Software SENA",
    type: "experience",
    description: "Desarrollo de Atlas y Themis usando microservicios, GraphQL y React.",
  },
  {
    year: "2023",
    title: "Técnico en Programación de Software",
    organization: "SENA",
    type: "education",
    description: "Fundamentos de programación y desarrollo web.",
  },
];

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("experience.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-20 pb-12"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-6 w-5 h-5 rounded-full bg-gradient-primary shadow-glow-primary"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    item.type === "education" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    {item.type === "education" ? (
                      <GraduationCap className="h-6 w-6" />
                    ) : (
                      <Briefcase className="h-6 w-6" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
                        {item.year}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{item.organization}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
