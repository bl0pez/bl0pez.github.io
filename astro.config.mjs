// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blopezdev.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    }),
  ],
});
