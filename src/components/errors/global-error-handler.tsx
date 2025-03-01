import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { useLocation } from "wouter";

const GlobalErrorHandler = () => {
	const [, setLocation] = useLocation();

	useEffect(() => {
		const handleGlobalError: OnErrorEventHandler = (
			event,
			source,
			lineno,
			colno,
			error,
		) => {
			console.error(
				"Caught by window.onerror:",
				event,
				source,
				lineno,
				colno,
				error,
			);
			notifications.show({
				message: error?.message || "Unknown error",
				color: "red",
			});
		};

		const handlePromiseRejection = (event: PromiseRejectionEvent) => {
			console.error("Unhandled Promise Rejection:", event.reason);
			notifications.show({
				message: event.reason?.message || "Something went wrong",
				color: "red",
			});
			if (event.reason?.redirect) {
				setLocation(event.reason.redirect);
			}
			event.preventDefault();
		};

		window.onerror = handleGlobalError;
		window.addEventListener("unhandledrejection", handlePromiseRejection);

		return () => {
			window.removeEventListener("unhandledrejection", handlePromiseRejection);
		};
	}, [setLocation]);

	return null;
};

export default GlobalErrorHandler;
