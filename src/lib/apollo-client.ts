import { GRAPHQL_API_BASE_URL } from "@/config/constant";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: GRAPHQL_API_BASE_URL,
	cache: new InMemoryCache(),
});

export default apolloClient;
