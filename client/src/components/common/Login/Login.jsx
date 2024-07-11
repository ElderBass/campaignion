import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ERROR_MESSAGE, LOCAL_STORAGE_KEYS } from "../../../utils/constants";
import { login } from "../../../utils/login";
import styles from "./Login.module.css";

const LoginForm = ({ setScreen }) => {
	const emailRef = useRef(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formFilledOut, setFormFilledOut] = useState(false);
	const [error, setError] = useState("");

	const history = useHistory();

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		if (email.length && password.length) {
			setFormFilledOut(true);
		}
	}, [email, password]);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			await login({ email, password });
			localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, true);
			history.push("/home");
		} catch (e) {
			if (e.response && e.response.status === 404) {
				setError(ERROR_MESSAGE.LOGIN[404]);
			} else if (e.response && e.response.status === 401) {
				setError(ERROR_MESSAGE.LOGIN.WRONG_PASSWORD);
			} else if (e.message) {
				setError(e.message);
			} else {
				setError(ERROR_MESSAGE.LOGIN.GENERIC);
			}
		}
	};

	return (
		<div className={styles.loginContainer}>
			<div className={styles.errorContainer}>
				{error && <div className={styles.error}>{error}</div>}
			</div>
			<form className={styles.loginForm}>
				<h1 className={styles.header}>Resume your journey...</h1>
				<div className={styles.inputField}>
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						ref={emailRef}
						name="email"
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className={styles.inputField}>
					<label className={styles.label} htmlFor="password">
						Password:
					</label>
					<input
						className={styles.input}
						name="password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
			</form>
			<div className={styles.actions}>
				<button
					className={styles.submitBtn}
					type="button"
					disabled={!formFilledOut}
					onClick={onSubmit}
				>
					Continue
				</button>
				<button
					className={styles.backBtn}
					onClick={() => setScreen(null)}
				>
					Back
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
