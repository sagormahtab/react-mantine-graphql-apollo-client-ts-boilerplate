import React from "react";
import Navbar from "../ui/navbar";
import styles from "./layouts.module.css";

interface IAuthenticatedLayout {
	children: React.ReactNode;
}

const AuthenticatedLayout = ({ children }: IAuthenticatedLayout) => {
	return (
		<>
			<Navbar />
			<div className={styles.authenticatedChildrenWrapper}>{children}</div>
		</>
	);
};

export default AuthenticatedLayout;
