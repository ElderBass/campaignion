import React from "react";
import { Hourglass } from "react-loader-spinner";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
	return (
		<div className={styles.loadingScreen}>
			<Hourglass
				height="100px"
				width="100px"
				colors={["#8b0000", "rgb(255, 114, 118)"]}
				visible={true}
				ariaLabel="hourglass-rotating"
			/>
		</div>
	);
};

export default LoadingScreen;
