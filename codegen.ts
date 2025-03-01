import type { CodegenConfig } from "@graphql-codegen/cli";
import { GRAPHQL_API_BASE_URL } from "./src/config/constant";

const config: CodegenConfig = {
	schema: GRAPHQL_API_BASE_URL,
	documents: "src/features/**/api/**/*.ts",
	generates: {
		"src/types/graphql.ts": {
			plugins: [
				"typescript",
				"typescript-operations",
				"typescript-react-apollo",
			],
			config: {
				withHooks: true,
			},
		},
	},
};

export default config;
