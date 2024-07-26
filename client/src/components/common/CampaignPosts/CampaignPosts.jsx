import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import CampaignPostsHeader from "../CampaignPostsHeader";
import styles from "./CampaignPosts.module.css";
import CampaignPostListItem from "../CampaignPostListItem";

const CampaignPosts = ({ postType }) => {
	const allCampaignPosts = useSelector(
		(state) => state.campaign.campaignPosts
	);
	const searchInput = useSelector((state) => state.campaign.searchInput);
	// const filters = useSelector((state) => state.campaign.filters);

	const activePosts = useMemo(() => {
		const allPosts = allCampaignPosts.filter(
			(post) => post.type === postType
		);
		if (searchInput) {
			const search = searchInput.trim().toLowerCase();
			return allPosts.filter(
				(post) =>
					post.title.toLowerCase().includes(search) ||
					post.description.toLowerCase().includes(search) ||
					post.poster.toLowerCase().includes(search)
			);
		}
		return allPosts;
	}, [allCampaignPosts, postType, searchInput]);

	return (
		<div className={styles.campaignPostsMenu}>
			<CampaignPostsHeader type={postType} searchInput={searchInput} />
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
