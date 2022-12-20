// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        categoryempty: resolve(__dirname, "src/category-empty.html"),
        categorymugs: resolve(__dirname, "src/category-mugs.html"),
        categoryflags: resolve(__dirname, "src/category-flags.html"),
        categorywreaths: resolve(__dirname, "src/category-wreaths.html"),
        singlemugs: resolve(__dirname, "src/singleview-mugs.html"),
        singlewreaths: resolve(__dirname, "src/singleview-wreaths.html"),
        singleflags: resolve(__dirname, "src/singleview-flags.html"),
        purchase: resolve(__dirname, "src/purchase.html"),
        payflow: resolve(__dirname, "src/payflow.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
