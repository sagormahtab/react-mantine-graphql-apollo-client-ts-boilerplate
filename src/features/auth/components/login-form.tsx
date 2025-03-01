import useAuthStore from "@/features/auth/auth.store";
import { useForm } from '@mantine/form';
import { TextInput, Button, Container, Paper, Title, Box } from '@mantine/core';
import { useLocation } from "wouter";

interface LoginFormValues {
	email: string;
	password: string;
}

const LoginForm = () => {
	const [, setLocation] = useLocation();
	const { login } = useAuthStore();

	const form = useForm<LoginFormValues>({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email format'),
			password: (value) => (value.length >= 8 ? null : 'Password must be at least 8 characters'),
		},
	});

	const onSubmit = async (values: LoginFormValues) => {
		await login(values.email, values.password);
		setLocation("/");
	};

	return (
		<Container size="xs">
			<Box mt={80}>
				<Paper radius="md" p="xl" withBorder>
					<Title order={2} ta="center" mb="lg">
						Sign In
					</Title>

					<form onSubmit={form.onSubmit(onSubmit)}>
						<TextInput
							required
							label="Email Address"
							placeholder="your@email.com"
							{...form.getInputProps('email')}
						/>

						<TextInput
							required
							label="Password"
							type="password"
							mt="md"
							{...form.getInputProps('password')}
						/>

						<Button type="submit" fullWidth mt="xl">
							Sign In
						</Button>
					</form>
				</Paper>
			</Box>
		</Container>
	);
};

export default LoginForm;
