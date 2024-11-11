'use client';

import { Provider } from 'react-redux';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { store } from '@/store';

import './globals.css';

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = createTheme();

	return (
		<html lang="en">
			<body>
				<Provider store={store}>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							{children}
						</ThemeProvider>
					</QueryClientProvider>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
