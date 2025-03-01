import { Post } from "@/types/graphql"; // Auto-generated types
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_POST = gql`
	query GetPost($id: ID!) {
		post(id: $id) {
			id
			title
			body
			user {
				id
				name
			}
			comments {
				data {
					id
					name
					body
				}
			}
		}
	}
`;

export const useGetPost = (id: string) => {
	const { data, loading, error } = useQuery(GET_POST, {
		variables: { id },
	});

	return {
		post: data?.post as Post | undefined,
		loading,
		error,
	};
};
