import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  base: "",
  esbuild: {
    supported: {
      "top-level-await": true,
    },
  },
  plugins: [splitVendorChunkPlugin()],
});
