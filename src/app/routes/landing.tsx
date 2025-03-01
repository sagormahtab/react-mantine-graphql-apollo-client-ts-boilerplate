import PublicLayout from "@/components/layouts/public-layout";
import PostList from "@/features/posts/components/post-list";

const Landing = () => {
	return (
		<PublicLayout>
			<PostList />
		</PublicLayout>
	);
};

export default Landing;
