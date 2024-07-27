import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../api";
import store from "../../../store";
import {
	setActivePostType,
	setCampaignPosts,
} from "../../../store/actions/campaign";
import LoadingScreen from "../../common/LoadingScreen";
import CampaignPosts from "../../common/CampaignPosts";
import CampaignDetailScreen from "../../common/CampaignDetailScreen";
import styles from "./Campaign.module.css";
import { fakeAdventureLog } from "../../../data/campaignPosts";

const Campaign = () => {
	const activePostType = useSelector(
		(state) => state.campaign.activePostType
	);
	const campaign = useSelector((state) => state.campaign.activeCampaign);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPosts = async () => {
			store.dispatch(setActivePostType(null));
			setLoading(true);
			const response = await getAllPosts(campaign._id);
			let renderedPosts = fakeAdventureLog;
			if (response.data.posts.length) {
				renderedPosts = response.data.posts;
			}
			store.dispatch(setCampaignPosts(renderedPosts));
			setLoading(false);
		};

		getPosts();
	}, [campaign]);

	return (
		<div className={styles.campaignPage}>
			{loading && <LoadingScreen />}
			{activePostType ? (
				<CampaignPosts postType={activePostType} />
			) : (
				<CampaignDetailScreen campaign={campaign} />
			)}
		</div>
	);
};

export default Campaign;
