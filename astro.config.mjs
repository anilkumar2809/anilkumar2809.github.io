// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://anilkumar2809.github.io",
  // base: "devportfolio",
  base:"/",
  vite: {
    plugins: [tailwindcss()],
  },
});
