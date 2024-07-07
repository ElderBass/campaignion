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
			<p className={styles.welcomeText}>Welcome, Adventurer</p>
			{screen === SCREENS.login && <Login />}
			{screen === SCREENS.signup && <Signup />}
			{!screen && (
				<div className={styles.landingActions}>
					<button
						className={classNames(styles.landingButton, styles.loginButton)}
						onClick={() => setScreen("login")}
					>
						Login
					</button>
					<button
						className={classNames(styles.landingButton, styles.signupButton)}
						onClick={() => setScreen("signup")}
					>
						Sign Up
					</button>
				</div>
			)}
		</div>
	);
};

export default Landing;
