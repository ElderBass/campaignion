import React, { useState } from "react";
import classNames from "classnames";
import Login from "../../common/Login/Login";
import Signup from "../../common/Signup/Signup";
import styles from "./Landing.module.css";

const SCREENS = {
	login: "login",
	signup: "signup",
};

const Landing = ({ isLoggedIn }) => {
	const [screen, setScreen] = useState(null);

	return (
		<div className={styles.landingPage}>
			{screen === SCREENS.login && <Login />}
			{screen === SCREENS.signup && <Signup />}
			{!screen && (
				<React.Fragment>
					<p className={styles.welcomeText}>Welcome, Adventurer</p>
					<div className={styles.landingActions}>
						<button
							className={classNames(
								styles.landingButton,
								styles.loginButton
							)}
							onClick={() => setScreen("login")}
						>
							Login
						</button>
						<button
							className={classNames(
								styles.landingButton,
								styles.signupButton
							)}
							onClick={() => setScreen("signup")}
						>
							Sign Up
						</button>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Landing;
