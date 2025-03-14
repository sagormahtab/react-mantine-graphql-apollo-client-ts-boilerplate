import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import '@mantine/core/styles.css';
import App from "./app";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
