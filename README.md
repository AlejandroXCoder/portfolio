# My portafolio personal

Portafolio personal de David Alejandro Carrión Rincón. Un sitio moderno, minimalista y con animaciones suaves para presentar experiencia, proyectos y contacto.

**🌐 Visita el sitio en vivo:** [https://portfolio-alejandro-carrion.vercel.app](https://portfolio-alejandro-carrion.vercel.app)

<p align="center">
	<img src="https://github.com/AlejandroXCoder/portfolio/blob/main/public/portfolio.png?raw=1" alt="Portada del portafolio" width="920" />
	<br/>
</p>

## Puntos clave

- UI moderna con Tailwind (tokens en HSL), glassmorphism y gradientes sutiles.
- Animaciones con Framer Motion: stagger, fade/slide-in, microinteracciones, y un Icon Cloud 3D.
- Multilenguaje ES/EN con react-i18next y LanguageToggle (se persiste en localStorage).
- Modo oscuro/claro con ThemeToggle y preferencia del sistema.
- Componentes shadcn/ui + Radix (accesibilidad por defecto).
- Routing con React Router y estados de toasts ya integrados.

## Secciones

- Hero: presentación + CTA y espacio para avatar PNG sin fondo (pon tu imagen en <code>public/avatar.png</code>).
- About: layout 2 columnas: IconCloud 3D a la izquierda y bento grid 2x2 de skills a la derecha.
- Projects: tarjetas con stack, hover y botones a GitHub/Demo.
- Experience: timeline de experiencia y educación.
- Contact: formulario básico con feedback por toast + enlaces sociales.
- NotFound (404): página coherente con el estilo, con avatar y acciones.

## Tecnologías

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui + Radix
- Framer Motion
- TanStack Query
- React Router
- i18next + react-i18next

## Estructura

```
src/
	components/        # Navbar, Hero, About, Projects, etc.
	pages/             # Index, NotFound
	i18n.ts            # Configuración de internacionalización
public/
	avatar.png         # Foto (PNG sin fondo) para el Hero y 404
	portfolio.png      # Imagen para este README (opcional)
```

## Uso rápido

Requisitos: Node.js 18+

Desarrollo:

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Personalización

- Avatar: reemplaza <code>public/avatar.png</code> por tu PNG sin fondo.
- Imagen del README: actualiza <code>public/portfolio.png</code> y el enlace de arriba si cambias el nombre.
- Colores/tokens: ajusta <code>src/index.css</code> en <code>@layer base</code>.
- Idiomas: edita textos en <code>src/i18n.ts</code>.

## Créditos

- Iconos: Simple Icons y Lucide.
- UI: shadcn/ui + Radix Primitives.
- Animaciones: Framer Motion.

---

© David Alejandro Carrión Rincón. Todos los derechos reservados.
