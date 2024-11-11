import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './__test__/setup.ts',
		server: {
			deps: {
				inline: ['@testing-library/react', '@testing-library/jest-dom'],
			},
		},
	},
});
