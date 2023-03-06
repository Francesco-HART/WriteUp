import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
import ViteRestart from "vite-plugin-restart";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
    ViteRestart({
      restart: ["my.config.[jt]s"],
    }),
    checker({ typescript: true }),
  ],
});
