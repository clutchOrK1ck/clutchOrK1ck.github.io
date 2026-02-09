import { webcore } from "webcoreui/integration";
// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), webcore()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  site: 'https://clutchOrK1ck.github.io',
});
