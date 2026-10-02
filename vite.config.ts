import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { componentTagger } from "lovable-tagger";

// Detect the Lovable preview sandbox. In the sandbox we force the Cloudflare
// preset (the only runtime the preview supports). Everywhere else (local
// builds, CI, Vercel) we use the Vercel preset so `vite build` emits the
// `.vercel/output/` directory that Vercel expects.
const isSandbox =
  process.env.LOVABLE_SANDBOX === "1" || !!process.env.DEV_SERVER__PROJECT_PATH;

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    ...(isSandbox ? { strictPort: true } : {}),
  },
  // Match build CSS pipeline in dev so prefixed properties stay consistent.
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts.
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    nitro(
      isSandbox
        ? {
            preset: "cloudflare-module",
            output: {
              dir: "dist",
              serverDir: "dist/server",
              publicDir: "dist/client",
            },
            cloudflare: { nodeCompat: true, deployConfig: true },
          }
        : { preset: "vercel" },
    ),
    viteReact(),
    ...(isDev ? [componentTagger()] : []),
  ],
});

