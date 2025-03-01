import ContactUsPage from "@/app/routes/contact-us";
import PrivateRoute from "@/components/layouts/private-route";
import { LOGIN_ROUTE } from "@/config/constant";
import { Route, Switch, Router as WouterRouter } from "wouter";
import Dashboard from "./routes/dashboard";
import Landing from "./routes/landing";
import LoginPage from "./routes/login";
import NotFoundRoute from "./routes/not-found";
import PostDetails from "./routes/post-details";
import Signup from "./routes/signup";

const AppRouter = () => {
	return (
		<WouterRouter>
			<Switch>
				<Route path="/" component={Landing} />
				<Route path="/posts/:id" component={PostDetails} />
				<Route path="/contact-us" component={ContactUsPage} />
				<Route path={LOGIN_ROUTE} component={LoginPage} />
				<Route path="/auth/signup" component={Signup} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<Route path="*" component={NotFoundRoute} />
			</Switch>
		</WouterRouter>
	);
};

export default AppRouter;
