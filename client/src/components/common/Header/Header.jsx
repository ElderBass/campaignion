import React from "react";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn }) => {
	return (
		<div className={styles.header}>
			<p className={styles.logo}>Campaignion</p>
			{isLoggedIn ? (
				<div className={styles.headerLink}>
					<a href="/home">Home</a>
				</div>
			) : null}
		</div>
	);
};

export default Header;
