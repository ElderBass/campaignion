import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./PartyMember.module.css";
import BackButton from "../../common/BackButton";

const PartyMember = () => {
	const history = useHistory();
	const {
		state: { member },
	} = useLocation();

	const { name, race, class: playerClass, player } = member;

	const onBackClick = () => history.goBack();

	return (
		<div className={styles.partyMemberContainer}>
			<div className={styles.titleContainer}>
				<BackButton onClick={onBackClick} />
				<h4>Viewing Character</h4>
				<div className={styles.spacer} />
			</div>
			<h2 className={styles.heading}>{name}</h2>
			<div className={styles.memberDetails}>
				{[
					{ label: "Race:", value: race },
					{ label: "Class:", value: playerClass },
					{ label: "Player:", value: player.name },
				].map(({ label, value }) => (
					<div className={styles.memberDetail}>
						<p>{label}</p>
						<p className={styles.detailValue}>{value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PartyMember;
