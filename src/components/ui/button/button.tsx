import { btnWrapper } from "./button.css";

type TButton = {
	text: string;
};

const Button = ({ text }: TButton) => {
	return <button className={btnWrapper}>{text}</button>;
};

export default Button;
