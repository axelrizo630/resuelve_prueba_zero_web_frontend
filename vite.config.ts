import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  server: {
    host: true,
    port: 4000,
    watch: {
      usePolling: true,
    },
  },
});
