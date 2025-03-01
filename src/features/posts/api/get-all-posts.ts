import { Post } from "@/types/graphql";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts($start: Int, $limit: Int) {
    posts(options: {slice: {start: $start, limit: $limit}}) {
      data {
        id
        title
        body
        user {
          id
          name
          email
        }
      }
    }
  }
`;

type TGetAllPosts = {
	start?: number;
	limit?: number;
};

export const useGetAllPosts = ({
	start = 1,
	limit = 10,
}: TGetAllPosts) => {
	const { data, loading, error  } = useQuery(GET_ALL_POSTS, {
		variables: {
			start,
			limit,
		},
	});

	return {
		posts: data?.posts?.data as Post[] | undefined,
		loading,
		error,
	};
};
