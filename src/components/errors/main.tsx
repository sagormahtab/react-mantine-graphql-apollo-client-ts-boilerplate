import { Button, Container, Stack, Text } from "@mantine/core";

export const MainErrorFallback = () => {
	return (
		<Container
			h="100vh"
			w="100vw"
			display="flex"
			style={{ alignItems: "center", justifyContent: "center" }}
			role="alert"
		>
			<Stack align="center">
				<Text size="xl" fw={700} c="red">
					Oops, something went wrong :(
				</Text>
				<Button
					variant="filled"
					onClick={() => window.location.assign(window.location.origin)}
					mt="md"
				>
					Refresh
				</Button>
			</Stack>
		</Container>
	);
};
