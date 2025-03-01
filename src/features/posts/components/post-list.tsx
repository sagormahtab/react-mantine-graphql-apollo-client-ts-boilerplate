import truncateString from "@/utils/truncate-string";
import {
	Card,
	Container,
	Grid,
	Group,
	Loader,
	Stack,
	Text,
} from "@mantine/core";
import { useLocation } from "wouter";
import { useGetAllPosts } from "../api/get-all-posts";

const PostList = () => {
	const [, setLocation] = useLocation();
	const { posts, loading, error } = useGetAllPosts({});

	const handleCardClick = (postId: string) => {
		setLocation(`/posts/${postId}`);
	};

	if (loading) {
		return (
			<Container>
				<Group justify="center" mt="xl">
					<Loader />
				</Group>
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<Text c="red">Error loading posts</Text>
			</Container>
		);
	}

	return (
		<Container size="xl" mt="md">
			<Grid>
				{posts?.map((post) => (
					<Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={post.id}>
						<Card
							shadow="sm"
							padding="lg"
							radius="md"
							withBorder
							onClick={() => handleCardClick(post.id || "")}
							style={{ cursor: "pointer" }}
						>
							<Stack mt="md" gap="sm">
								<Text fw={500} size="lg" truncate>
									{truncateString(post.title || "", 30)}
								</Text>

								<Text size="sm" c="dimmed" lineClamp={3}>
									{truncateString(post.body || "", 100)}
								</Text>

								<Group>
									<Text size="sm" c="dimmed">
										By: {post.user?.name || ""}
									</Text>
									<Text size="sm" c="dimmed">
										{post.user?.email || ""}
									</Text>
								</Group>
							</Stack>
						</Card>
					</Grid.Col>
				))}
			</Grid>
		</Container>
	);
};

export default PostList;
