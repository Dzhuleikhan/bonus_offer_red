import { defineConfig, splitVendorChunkPlugin } from "vite";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    base: "",
    esbuild: {
      supported: {
        "top-level-await": true,
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_URL, // Use the URL from the .env file
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [splitVendorChunkPlugin()],
  };
});
