import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJs(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactContributors",
      formats: ["es", "umd"],
      fileName: (format) => `react-contributors.${format}.js`,
    },
    cssCodeSplit: false,
    cssMinify: true,
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom", "@octokit/rest"],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@octokit/rest": "Octokit",
        },
        assetFileNames: "react-contributors.[ext]",
      },
    },
    emptyOutDir: true,
  },
});
