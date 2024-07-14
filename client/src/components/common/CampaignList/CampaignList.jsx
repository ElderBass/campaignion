import React, { useState } from "react";
import CampaignListResult from "../CampaignListResult";
import styles from "./CampaignList.module.css";

const CampaignList = ({ campaigns }) => {
	const [selectedCampaign, setSelectedCampaign] = useState(null);

	const onCardClick = (campaign) => {
		setSelectedCampaign(campaign);
	};

	const goBackHandler = () => setSelectedCampaign(null);

	return (
		<div className={styles.campaignList}>
			{selectedCampaign ? (
				<div></div>
			) : (
				<React.Fragment>
					{campaigns.map((campaign) => (
						<CampaignListResult
                            key={campaign._id}
							campaign={campaign}
							onClick={onCardClick}
						/>
					))}
				</React.Fragment>
			)}
		</div>
	);
};

export default CampaignList;
