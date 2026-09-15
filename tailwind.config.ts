/**
 * Tailwind v4 NO lee este archivo.
 *
 * Con `@import "tailwindcss"` en app/globals.css, la configuracion por archivo
 * quedo desactivada salvo que se la declare explicitamente con `@config`. Este
 * archivo tuvo durante meses la paleta, la escala tipografica, el espaciado y
 * las sombras del sitio, y Tailwind los descarto en silencio: `bg-primary`
 * renderizaba transparente, `shadow-card` renderizaba `none` y
 * `text-h1-desktop` renderizaba 16px, sin ningun error de build.
 *
 * Los tokens viven ahora en el bloque `@theme` de app/globals.css.
 * NO agregues tokens aca: no van a existir.
 *
 * Se conserva el archivo solo para que este comentario quede a la vista de
 * quien vaya a buscarlos donde estaban antes.
 */
export {};
