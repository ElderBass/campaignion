import React from "react";
import styles from "./CampaignListResult.module.css";

const CampaignListResult = ({ campaign, onClick }) => {
	const { name, description, dungeonMaster } = campaign;

	return (
		<div className={styles.campaignCard} onClick={() => onClick(campaign)}>
			<h3 className={styles.campaignName}>{name}</h3>
			<p>{description}</p>
			<p>
				<span className={styles.dm}>Dungeon Master:</span>{" "}
				{dungeonMaster.name}
			</p>
		</div>
	);
};

export default CampaignListResult;
