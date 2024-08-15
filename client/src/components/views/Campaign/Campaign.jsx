import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCampaignPosts } from "../../../utils/getCampaignPosts";
import { setActivePostType } from "../../../store/actions/campaign";
import store from "../../../store";
import LoadingScreen from "../../common/LoadingScreen";
import CampaignPosts from "../../common/CampaignPosts";
import CampaignDetailScreen from "../../common/CampaignDetailScreen";
import styles from "./Campaign.module.css";

const Campaign = () => {
	const activePostType = useSelector(
		(state) => state.campaign.activePostType
	);
	const campaign = useSelector((state) => state.campaign.activeCampaign);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getCampaignPosts();
		setLoading(false);

		return () => {
			store.dispatch(setActivePostType(null));
		};
	}, [campaign]);

	return (
		<div className={styles.campaignPage}>
			{loading ? (
				<LoadingScreen />
			) : (
				<React.Fragment>
					{activePostType ? (
						<CampaignPosts postType={activePostType} />
					) : (
						<CampaignDetailScreen campaign={campaign} />
					)}
				</React.Fragment>
			)}
		</div>
	);
};

export default Campaign;
