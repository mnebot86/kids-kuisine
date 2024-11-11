import '@testing-library/react';

declare module '@testing-library/react' {
	interface ByRoleOptions {
		level?: number;
	}
}
