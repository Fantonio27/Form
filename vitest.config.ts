import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './src/test/setup.ts',
    include: ["**/*.test.{ts,tsx,js}"],
    // exclude: ["node_modules", ".next/**"],
    // poolOptions: {
    //   threads: {
    //     singleThread: true,
    //   },
    // },
  },
  resolve: { alias: { "@": "/src" } },
});