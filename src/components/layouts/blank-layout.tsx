import React from "react";
import "./layouts.module.css";

interface IBlankLayout {
	children: React.ReactNode;
}

const BlankLayout = ({ children }: IBlankLayout) => {
	return (
		<>
			<div className="blankChildrenWrapper">{children}</div>
		</>
	);
};

export default BlankLayout;
