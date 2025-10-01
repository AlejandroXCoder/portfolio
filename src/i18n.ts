import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: {
      nav: { about: "about", projects: "projects", experience: "experience", contact: "contact" },
      hero: {
        title: "David Alejandro Carrión Rincón",
        role: "Fullstack Developer | Spring Boot + Next.js + GraphQL",
        summary:
          "Software Technologist certified by SENA. Fullstack developer with real-world experience using microservices and GraphQL. Passionate about building scalable, modern solutions.",
        ctaCv: "Download CV",
        ctaProjects: "View Projects",
      },
      about: {
        title: "About Me",
        subtitle: "Developer passionate about creating modern and scalable web experiences",
        micro: {
          frontend: "Fast and delightful interfaces",
          backend: "Secure and scalable APIs",
          db: "Consistent and performant data",
          tools: "Efficient collaboration flows",
        },
      },
      projects: { title: "Featured Projects", subtitle: "Fullstack apps with modern architectures", github: "GitHub", demo: "Demo" },
      experience: { title: "Experience & Education", subtitle: "My professional and academic path" },
      contact: { title: "Contact", subtitle: "Have a project in mind? Let's talk!", send: "Send Message" },
      footer: { built: "Built with React + Vite + Tailwind CSS" },
      notFound: { title: "Page not found", back: "Go back", home: "Go home", copy: "The route you tried to open doesn't exist or changed." },
    },
  },
  es: {
    common: {
      nav: { about: "about", projects: "projects", experience: "experience", contact: "contact" },
      hero: {
        title: "David Alejandro Carrión Rincón",
        role: "Fullstack Developer | Spring Boot + Next.js + GraphQL",
        summary:
          "Tecnólogo en Análisis y Desarrollo de Software certificado por el SENA. Desarrollador fullstack con experiencia en proyectos reales usando microservicios y GraphQL. Apasionado por construir soluciones escalables y modernas.",
        ctaCv: "Descargar CV",
        ctaProjects: "Ver Proyectos",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Desarrollador apasionado por crear experiencias web modernas y escalables",
        micro: {
          frontend: "Interfaces rápidas y atractivas",
          backend: "APIs seguras y escalables",
          db: "Datos consistentes y performantes",
          tools: "Flujos eficientes de colaboración",
        },
      },
      projects: { title: "Proyectos Destacados", subtitle: "Aplicaciones fullstack con arquitecturas modernas", github: "GitHub", demo: "Demo" },
      experience: { title: "Experiencia & Educación", subtitle: "Mi trayectoria profesional y académica" },
      contact: { title: "Contacto", subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!", send: "Enviar Mensaje" },
      footer: { built: "Desarrollado con React + Vite + Tailwind CSS" },
      notFound: { title: "Página no encontrada", back: "Regresar", home: "Ir al inicio", copy: "La ruta que intentaste abrir no existe o cambió." },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator", "htmlTag"], caches: ["localStorage"] },
  });

export default i18n;
export type AppLocale = keyof typeof resources;