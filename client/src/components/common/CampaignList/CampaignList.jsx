import React from "react";
import { useHistory } from "react-router-dom";
import CampaignListResult from "../CampaignListResult";
import styles from "./CampaignList.module.css";
import store from "../../../store";
import { setActiveCampaign } from "../../../store/actions/campaign";

const CampaignList = ({ campaigns }) => {
	const history = useHistory();

	const onCardClick = (campaign) => {
		store.dispatch(setActiveCampaign(campaign));
		history.push(`/campaign/${campaign._id}`);
	};

	return (
		<div className={styles.campaignList}>
			{campaigns.map((campaign) => (
				<CampaignListResult
					key={campaign.name}
					campaign={campaign}
					onClick={onCardClick}
				/>
			))}
		</div>
	);
};

export default CampaignList;
