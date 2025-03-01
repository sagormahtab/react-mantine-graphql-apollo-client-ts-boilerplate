import React from "react";
import styles from "./layouts.module.css";

interface IDashboardLayout {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
	return (
		<>
			<div className={styles.dashboardChildrenWrapper}>{children}</div>
		</>
	);
};

export default DashboardLayout;
