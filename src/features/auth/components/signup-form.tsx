import useAuthStore from "@/features/auth/auth.store";
import { useForm } from '@mantine/form';
import { TextInput, Button, Container, Paper, Title, Box, Grid } from '@mantine/core';
import { useLocation } from "wouter";
import { LOGIN_ROUTE } from "@/config/constant";

interface SignupFormValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const SignupForm = () => {
	const [, setLocation] = useLocation();
	const { signup } = useAuthStore();

	const form = useForm<SignupFormValues>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate: {
			firstName: (value) => (value.length > 0 ? null : 'First name is required'),
			lastName: (value) => (value.length > 0 ? null : 'Last name is required'),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email format'),
			password: (value) => (value.length >= 8 ? null : 'Password must be at least 8 characters'),
			confirmPassword: (value, values) => 
				value !== values.password ? 'Passwords did not match' : null,
		},
	});

	const onSubmit = async (values: SignupFormValues) => {
		await signup(values);
		setLocation("/");
	};

	return (
		<Container size="xs">
			<Box mt={80}>
				<Paper radius="md" p="xl" withBorder>
					<Title order={2} ta="center" mb="lg">
						Create an Account
					</Title>

					<form onSubmit={form.onSubmit(onSubmit)}>
						<Grid>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<TextInput
									required
									label="First Name"
									placeholder="John"
									{...form.getInputProps('firstName')}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, sm: 6 }}>
								<TextInput
									required
									label="Last Name"
									placeholder="Doe"
									{...form.getInputProps('lastName')}
								/>
							</Grid.Col>
						</Grid>

						<TextInput
							required
							label="Email Address"
							placeholder="your@email.com"
							mt="md"
							{...form.getInputProps('email')}
						/>

						<TextInput
							required
							label="Password"
							type="password"
							mt="md"
							{...form.getInputProps('password')}
						/>

						<TextInput
							required
							label="Confirm Password"
							type="password"
							mt="md"
							{...form.getInputProps('confirmPassword')}
						/>

						<Button type="submit" fullWidth mt="xl">
							Sign Up
						</Button>

						<Button 
							variant="subtle" 
							fullWidth 
							mt="md"
							onClick={() => setLocation(LOGIN_ROUTE)}
						>
							Already have an account? Sign in
						</Button>
					</form>
				</Paper>
			</Box>
		</Container>
	);
};

export default SignupForm;
