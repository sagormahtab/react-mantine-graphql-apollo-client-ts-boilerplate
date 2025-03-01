import Navbar from "../ui/navbar";
import styles from "./layouts.module.css";

interface IPublicLayout {
	children: React.ReactNode;
}

const PublicLayout = ({ children }: IPublicLayout) => {
	return (
		<>
			<Navbar />
			<div className={styles.publicChildrenWrapper}>{children}</div>
		</>
	);
};

export default PublicLayout;
