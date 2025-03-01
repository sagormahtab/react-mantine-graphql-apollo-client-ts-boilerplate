import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), viteTsconfigPaths()],
	resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
		},
	},
	server: {
		port: 3000,
		hmr: true,
		watch: {
			usePolling: false,
		},
	},
	preview: {
		port: 3000,
	}
});
