import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on GitHub Pages whatever your repo is called.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
