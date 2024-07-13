import React from "react";
import styles from "./CampaignCard.module.css";

const CampaignCard = ({ campaign }) => {
	const { name, description, dungeonMaster } = campaign;

	return (
		<div className={styles.campaignCard}>
			<h3 className={styles.campaignName}>{name}</h3>
			<p>{description}</p>
			<p>
				<span className={styles.dm}>Dungeon Master:</span>{" "}
				{dungeonMaster.name}
			</p>
		</div>
	);
};

export default CampaignCard;
