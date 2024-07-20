import React from "react";
import { CAMPAIGN_POST_TYPES } from "../../../utils/constants";
import store from "../../../store";
import { setActivePostType } from "../../../store/actions/campaign";
import CampaignPostMenuCard from "../CampaignPostMenuCard";
import styles from "./CampaignPostMenu.module.css";

const CampaignPostMenu = () => {
	const postTypeList = Object.values(CAMPAIGN_POST_TYPES);

	return (
		<div className={styles.postMenu}>
			{postTypeList.map((postType) => (
				<CampaignPostMenuCard
					key={postType}
					className={styles.postTypeButton}
					onClick={() => store.dispatch(setActivePostType(postType))}
					type={postType}
				/>
			))}
		</div>
	);
};

export default CampaignPostMenu;
