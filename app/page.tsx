import { Container, Typography } from '@mui/material';

const HomePage = () => (
	<Container
		maxWidth={false}
		sx={{
			height: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			bgcolor: 'primary.main',
			color: 'white',
		}}
	>
		<Typography variant="h2" component="h1" sx={{ fontSize: '4rem' }}>
			New Project
		</Typography>
	</Container>
);

export default HomePage;
