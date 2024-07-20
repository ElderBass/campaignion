import React from "react";
import styles from "./CampaignPostMenuCard.module.css";

const CampaignPostMenuCard = ({ onClick, type }) => {
	return (
		<div className={styles.postMenuCard} onClick={onClick}>
			<h3 className={styles.campaignName}>{type}</h3>
		</div>
	);
};

export default CampaignPostMenuCard;
