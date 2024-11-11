import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import Page from '@/app/page';

describe('HomePage', () => {
	test('Does the heading render?', () => {
		render(<Page />);
		expect(
			screen.getByRole('heading', { level: 1, name: /New Project/i }),
		).toBeInTheDocument();
	});
});
