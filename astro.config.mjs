import { webcore } from "webcoreui/integration";
// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), webcore()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: "static",

  adapter: vercel(),

  site: 'https://clutchorkick.dev',
});
