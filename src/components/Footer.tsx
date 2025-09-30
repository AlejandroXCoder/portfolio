import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} David Alejandro Carrión Rincón. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Desarrollado con React + Vite + Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};
