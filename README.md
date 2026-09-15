# portafolio-rn

Portafolio personal de **Ricardo Nigrelli** — desarrollador full stack y diseñador UX/UI.

En línea: **[portafolio-rn-beta.vercel.app](https://portafolio-rn-beta.vercel.app)**

Una sola página con las secciones de inicio, proyectos, stack, formación y contacto, más una
página de caso por proyecto en `/projects/[id]` con contexto, problema, solución, proceso y
resultados. Todo el contenido está en español e inglés, con el interruptor de idioma en el
encabezado.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | Framer Motion |
| Iconos de interfaz | lucide-react |
| Marcas de tecnologías | simple-icons (CC0-1.0), inline y en monocromo |
| Tipografías | Inter y Poppins vía `next/font` |
| Hosting | Vercel |

## Cómo correrlo

```bash
npm install
npm run dev
# http://localhost:3000
```

```bash
npm run build   # build de producción
npm start       # servir el build
npm run lint
```

## Estructura

```
app/
  layout.tsx           Raíz: fuentes, metadatos, proveedores de idioma y de movimiento
  globals.css          Sistema de diseño (bloque @theme) y estilos base
  page.tsx             Portada
  projects/[id]/       Página de caso por proyecto, prerenderizada con generateStaticParams
components/
  common/              Botón, tarjeta de proyecto, badge de stack, encabezado de sección
  layout/              Header y Footer
  sections/            Hero, proyectos, stack, formación, contacto
  project/             Piezas de la página de caso
  effects/             ScrollReveal y el proveedor de MotionConfig
data/                  Proyectos, formación y stack, como fuente única de contenido
hooks/                 useLanguage (i18n) y useScrollReveal
lib/                   Utilidades y el mapa de marcas de tecnologías
public/
  cv/                  CV en PDF, español e inglés
  images/projects/     Capturas de cada proyecto
```

El contenido vive en `data/`, no en los componentes: para agregar un proyecto alcanza con
sumar una entrada en `data/projects.ts` y su imagen en `public/images/projects/`. La página de
caso y la tarjeta de la portada se generan a partir de ahí.

## El sistema de diseño está en `globals.css`, no en `tailwind.config.ts`

Vale la pena saberlo antes de tocar los colores, porque cuesta un rato descubrirlo.

Este proyecto usa **Tailwind v4** con `@import "tailwindcss"`. En esa configuración
**`tailwind.config.ts` se ignora**, salvo que se lo declare explícitamente con `@config`. Los
tokens —paleta, escala tipográfica, espaciado y sombras— viven en el bloque `@theme` de
[`app/globals.css`](app/globals.css).

El detalle importante es que el descarte es **silencioso**: no hay warning ni error de build.
Mientras los tokens estuvieron en el archivo de configuración, `bg-primary` renderizaba
transparente, `shadow-card` renderizaba `none` y `text-h1-desktop` renderizaba 16px, y el build
pasaba en verde.

### Contraste del acento

El cian de marca `#00D9FF` tiene **1.70:1 sobre blanco**, muy por debajo del mínimo AA de 4.5:1,
y **11.19:1 sobre el azul oscuro** `#0A0E27`. Por eso hay dos tokens:

- `secondary` (`#00D9FF`) — solo sobre fondo oscuro, por ejemplo el footer
- `secondary-ink` (`#007A8F`) — el mismo tono, corrido en luminosidad, para texto sobre claro

### Accesibilidad

- Todas las animaciones de Framer Motion pasan por `MotionConfig reducedMotion="user"`, y el
  scroll suave está dentro de `@media (prefers-reduced-motion: no-preference)`.
- El foco se marca con `focus-visible`, nunca quitando el outline sin reemplazo.
- Los textos de ambas páginas están medidos contra WCAG AA con composición alfa real.

## Licencia

El código es de uso libre como referencia. El contenido —textos, imágenes de los proyectos,
CV y fotografías— es propiedad de Ricardo Nigrelli y no se redistribuye.

Las marcas de tecnologías provienen de [simple-icons](https://simpleicons.org) (CC0-1.0) y son
marcas registradas de sus respectivos titulares; se usan para referirse a la tecnología.
