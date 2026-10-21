import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vitejs.dev/config/
// TODO: check for any issue with promise resolvers
export default defineConfig({
  plugins: [
    react(),
    cloudflare()
  ],
  base: "/",
});
