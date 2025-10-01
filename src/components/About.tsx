import { motion } from "framer-motion";
import { Code2, Database, Server, GitBranch } from "lucide-react";
import type { ComponentType } from "react";
import { IconCloud } from "@/components/IconCloud";
import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiSpringboot,
  SiPhp,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiGraphql,
  SiApollographql,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Tech = { name: string; Icon: ComponentType<{ className?: string }>; };
type Skill = {
  category: string;
  icon: ComponentType<{ className?: string }>;
  items: Tech[];
  color: string;
};

const skills: Skill[] = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind", Icon: SiTailwindcss },
      { name: "Redux", Icon: SiRedux },
    ],
    color: "text-primary",
  },
  {
    category: "Backend",
    icon: Server,
    items: [
  { name: "Java", Icon: FaJava },
      { name: "Spring Boot", Icon: SiSpringboot },
      { name: "PHP", Icon: SiPhp },
  { name: "C#/.NET", Icon: SiDotnet },
      { name: "Node.js", Icon: SiNodedotjs },
    ],
    color: "text-secondary",
  },
  {
    category: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    color: "text-accent",
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: [
      { name: "GitHub", Icon: SiGithub },
      { name: "GraphQL", Icon: SiGraphql },
      { name: "Apollo", Icon: SiApollographql },
    ],
    color: "text-primary",
  },
];

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Icon Cloud with radial gradient and subtle parallax container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-md p-6"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(1200px circle at 20% 0%, hsl(var(--primary)/0.08), transparent 35%), radial-gradient(900px circle at 80% 100%, hsl(var(--secondary)/0.08), transparent 35%)",
              }}
            />
            <div className="relative">
              <IconCloud
                className="mx-auto h-[480px] md:h-[480px] w-[480px] md:w-[480px]"
                iconClassName="transition-transform duration-200 will-change-transform hover:scale-110 focus:scale-110"
                slugs={[
                  "react",
                  "nextdotjs",
                  "tailwindcss",
                  "nodedotjs",
                  "springboot",
                  "java",
                  "php",
                  "dotnet",
                  "mysql",
                  "postgresql",
                  "mongodb",
                  "graphql",
                  "apollographql",
                  "github",
                  "redux",
                ]}
                options={{ depth: 0.92, reverse: true, clickToFront: 600, tooltip: "native", imageScale: 2 }}
              />
            </div>
          </motion.div>

          {/* Right: 2x2 bento grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group rounded-2xl border border-border bg-card/70 backdrop-blur-md p-6 overflow-hidden"
              >
                {/* Glow border by category */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    boxShadow:
                      skill.category === "Frontend"
                        ? "0 0 40px hsl(var(--primary)/0.35)"
                        : skill.category === "Backend"
                        ? "0 0 40px hsl(var(--secondary)/0.35)"
                        : skill.category === "Databases"
                        ? "0 0 40px hsl(var(--accent)/0.35)"
                        : "0 0 40px hsl(var(--ring)/0.25)",
                  }}
                />

                <skill.icon className={`h-10 w-10 ${skill.color} mb-3`} />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.category === "Frontend" && t("about.micro.frontend")}
                  {skill.category === "Backend" && t("about.micro.backend")}
                  {skill.category === "Databases" && t("about.micro.db")}
                  {skill.category === "Tools" && t("about.micro.tools")}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map(({ name, Icon }) => (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 text-xs bg-muted/70 px-3 py-1.5 rounded-full text-muted-foreground border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
