import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../../store";
import { setSuccessAlert } from "../../../store/actions/alert";
import Alert from "react-bootstrap/Alert";
import { SUCCESS_ALERTS } from "../../../utils/constants";
import styles from "./SuccessAlert.module.css";

const SuccessAlert = () => {
	const type = useSelector((state) => state.alert.successAlert);

	const { ADD_COMMENT, ADD_POST } = SUCCESS_ALERTS;

	useEffect(() => {
		if (type) {
			setTimeout(() => {
				store.dispatch(setSuccessAlert(null));
			}, 3000);
		}
	}, [type]);

	if (!type) {
		return null;
	}

	const alertMap = {
		[ADD_COMMENT]:
			"Dexterity saving throw succeeded: Comment added successfully.",
		[ADD_POST]: "Wisdom saving throw succeeded: Post added successfully.",
	};
	const message = alertMap[type];

	const onClose = () => store.dispatch(setSuccessAlert(null));

	return (
		<div className={styles.alert}>
			<Alert dismissible onClose={onClose} variant="success">
				{message}
			</Alert>
		</div>
	);
};

export default SuccessAlert;
