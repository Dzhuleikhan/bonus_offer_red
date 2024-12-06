import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  base: "",
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://cdndigitaloceanspaces.cloud/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [splitVendorChunkPlugin()],
});
