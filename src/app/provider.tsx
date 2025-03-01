import GlobalErrorHandler from "@/components/errors/global-error-handler";
import { MainErrorFallback } from "@/components/errors/main";
import apolloClient from "@/lib/apollo-client";
import theme from "@/theme";
import { ApolloProvider } from "@apollo/client";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

interface IAppProvider {
	children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
	return (
		<MantineProvider theme={theme}>
			<Notifications />
			<ColorSchemeScript />
			<ApolloProvider client={apolloClient}>
				<ErrorBoundary FallbackComponent={MainErrorFallback}>
					<GlobalErrorHandler />
					{children}
				</ErrorBoundary>
			</ApolloProvider>
		</MantineProvider>
	);
};

export default AppProvider;
