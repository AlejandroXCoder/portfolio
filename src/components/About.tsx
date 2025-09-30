import { motion } from "framer-motion";
import { Code2, Database, Server, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "Tailwind", "Zustand", "Redux"],
    color: "text-primary",
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "PHP", "C#"],
    color: "text-secondary",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    color: "text-accent",
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: ["Git/GitHub", "GraphQL", "REST APIs"],
    color: "text-primary",
  },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador apasionado por crear experiencias web modernas y escalables
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-card rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all">
                <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
