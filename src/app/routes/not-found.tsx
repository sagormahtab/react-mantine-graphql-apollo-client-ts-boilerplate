import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "wouter";

const NotFoundRoute = () => {
	return (
		<Container mt={52}>
			<Stack align="center" ta="center">
				<Title order={2}>404 - Not Found</Title>
				<Text>Sorry, the page you are looking for does not exist.</Text>
				<Link href="/">
					<Button>Go to Home</Button>
				</Link>
			</Stack>
		</Container>
	);
};

export default NotFoundRoute;
