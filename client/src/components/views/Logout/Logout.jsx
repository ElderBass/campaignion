import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../../utils/logout";
import styles from "./Logout.module.css";

const Logout = () => {
	const history = useHistory();

	const onSubmit = async () => {
		logout();
		history.push("/landing");
	};

	const goBack = () => history.goBack();

	return (
		<div className={styles.logoutPage}>
			<h1 className={styles.logoutHeader}>Rolling out?</h1>
			<div className={styles.actions}>
				<button className={styles.logoutButton} onClick={onSubmit}>
					Logout
				</button>
				<button className={styles.cancelButton} onClick={goBack}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Logout;
