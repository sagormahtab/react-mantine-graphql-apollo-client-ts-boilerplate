import {
	Box,
	Button,
	Container,
	Paper,
	Select,
	Stack,
	TextInput,
	Textarea,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import useContactStore from "../contact-us.store";

const ContactUs = () => {
	const { submitMessage, isSubmitting } = useContactStore();
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) =>
				value.length < 2 ? "Name must be at least 2 characters" : null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			subject: (value) =>
				value.length < 3 ? "Subject must be at least 3 characters" : null,
			message: (value) =>
				value.length < 10 ? "Message must be at least 10 characters" : null,
		},
	});

	const handleSubmit = async (values: typeof form.values) => {
		try {
			await submitMessage(values);
			form.reset();
			// Optional: Add success notification here
		} catch (error) {
			// Optional: Add error notification here
			console.error("Failed to submit message:", error);
		}
	};

	return (
		<Container size="md">
			<Box mt={40}>
				<Title order={2} mb="lg">
					Contact Us
				</Title>
				<Paper radius="md" p="md" withBorder>
					<form onSubmit={form.onSubmit(handleSubmit)}>
						<Stack gap="md">
							<TextInput
								required
								label="Name"
								placeholder="Your name"
								{...form.getInputProps("name")}
							/>
							<TextInput
								required
								label="Email"
								placeholder="your@email.com"
								{...form.getInputProps("email")}
							/>
							<Select
								required
								label="Subject"
								placeholder="Select a subject"
								data={[
									"General Inquiry",
									"Technical Support",
									"Billing Question",
									"Feature Request",
									"Other",
								]}
								{...form.getInputProps("subject")}
							/>
							<Textarea
								required
								label="Message"
								placeholder="How can we help you?"
								minRows={4}
								{...form.getInputProps("message")}
							/>
							<Button type="submit" size="md" mt="md" loading={isSubmitting}>
								Send Message
							</Button>
						</Stack>
					</form>
				</Paper>
			</Box>
		</Container>
	);
};

export default ContactUs;
