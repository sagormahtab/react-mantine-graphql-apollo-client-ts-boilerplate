import {
	Card,
	Container,
	Grid,
	Group,
	Image,
	Loader,
	Stack,
	Text,
} from "@mantine/core";
import { useParams } from "wouter";
import { useGetPost } from "../api/get-post";

const Post = () => {
	const { id } = useParams();
	const { post, loading, error } = useGetPost(id || "");

	if (loading) {
		return (
			<Container>
				<Group justify="center" mt="xl">
					<Loader />
				</Group>
			</Container>
		);
	}

	if (error || !post) {
		return (
			<Container>
				<Text c="red">Post not found</Text>
			</Container>
		);
	}

	return (
		<Container size="lg" mt="md">
			<Grid>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Image
							src={"https://picsum.photos/600/400"}
							alt={post.title || ""}
							fit="contain"
							h={400}
						/>
					</Card>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 6 }}>
					<Stack gap="md">
						<Text size="xl" fw={700}>
							{post.title || ""}
						</Text>
						<Text size="lg" c="dimmed">
							By: {post.user?.name || ""}
						</Text>
						<Text>{post.body || ""}</Text>
					</Stack>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default Post;
