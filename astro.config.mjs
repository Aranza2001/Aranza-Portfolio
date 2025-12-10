import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aranza2681.github.io',
  base: '/Aranza-Portfolio',  // O '/portfolio-personal' según tu repo
  integrations: [tailwind()]
});