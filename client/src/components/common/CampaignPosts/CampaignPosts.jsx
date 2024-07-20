import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CampaignPostsHeader from "../CampaignPostsHeader";
import styles from "./CampaignPosts.module.css";
import CampaignPostListItem from "../CampaignPostListItem";

const CampaignPosts = ({ postType }) => {
	const allCampaignPosts = useSelector(
		(state) => state.campaign.campaignPosts
	);

	const activePosts = useMemo(() => {
		return allCampaignPosts.filter((post) => post.type === postType);
	}, [allCampaignPosts, postType]);

	return (
		<div className={styles.campaignPostsMenu}>
			<CampaignPostsHeader type={postType} />
			<div className={styles.spacer} />
			{activePosts.length > 0 && (
				<div className={styles.postsList}>
					{activePosts.map((post) => (
						<CampaignPostListItem key={post._id} post={post} />
					))}
				</div>
			)}
		</div>
	);
};

export default CampaignPosts;
