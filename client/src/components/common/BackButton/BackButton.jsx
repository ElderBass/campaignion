import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./BackButton.module.css";

const BackButton = ({ onClick }) => {
	return (
		<button className={styles.backButton} onClick={onClick}>
			<FontAwesomeIcon icon={faArrowLeft} size="2x" />
		</button>
	);
};

export default BackButton;
