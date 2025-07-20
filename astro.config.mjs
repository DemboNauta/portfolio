// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [tailwind()],
});