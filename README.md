# blopezdev.com · Tutoriales de IA

Sitio de tutoriales, consejos y prompts para crear videos, juegos y webs con inteligencia artificial, en español.

- Hecho con [Astro](https://astro.build); el único JavaScript en el cliente es el botón "Copiar".
- Se publica en https://blopezdev.com (GitHub Pages) con cada push a `main` (`.github/workflows/deploy.yml`).

## Agregar un tutorial

1. Crea la página en `src/pages/tutoriales/<slug>.astro` (usa `short-3d-con-ia.astro` como plantilla).
2. Agrégalo a su categoría en `src/data/tutoriales.ts`. La portada y `/tutoriales/` lo muestran solos.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Contexto de diseño

- `PRODUCT.md`: a quién le habla el sitio y qué se puede publicar.
- `DESIGN.md`: sistema visual (formato design.md).
- Buenas prácticas web: skill modern-web-guidance (botón copiar con Invoker Commands, tarjetas, migas, modo oscuro).
