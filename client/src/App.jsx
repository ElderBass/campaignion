import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import AuthRoute from "./components/common/AuthRoute";
import Header from "./components/common/Header";
import Home from "./components/views/Home";
import Landing from "./components/views/Landing";
import Campaign from "./components/views/Campaign/Campaign";
// import Logout from "./components/views/Logout";
// import UserPage from "./components/views/UserPage";
// import FourOhFourPage from "./components/views/FourOhFourPage";
import styles from "./App.module.css";

function App() {
	const ComponentMap = {
		Home,
		Landing,
	};

	const {
		user: { isLoggedIn },
	} = store.getState();

	const [CatchAllPage, setCatchAllPage] = useState(null);

	// TODO: Is this the best way to do this? Can't I just take a pure Route approach?
	useEffect(() => {
		const path = window.location.pathname;
		if (path === "/") {
			if (isLoggedIn) {
				setCatchAllPage("Home");
			} else {
				setCatchAllPage("Landing");
			}
		} else {
			setCatchAllPage("FourOhFourPage");
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<div className={styles.mainContainer}>
				<Header isLoggedIn={isLoggedIn} />
				<div className={styles.contentContainer}>
					<Switch>
						<AuthRoute exact path="/home" component={Home} />
						<AuthRoute path="/campaign/:campaign" component={Campaign} />

						{/* <AuthRoute exact path="/logout" component={Logout} /> */}
						<Route exact path="/landing" component={Landing} />
						<Route component={ComponentMap[CatchAllPage]} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
