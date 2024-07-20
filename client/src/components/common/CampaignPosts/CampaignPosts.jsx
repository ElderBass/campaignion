import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styles from "./CampaignPosts.module.css";

const CampaignPosts = ({ type }) => {
	const allCampaignPosts = useSelector((state) => state.campaign.campaignPosts);

	const activePosts = useMemo(() => {
		return allCampaignPosts.filter((post) => post.type === type);
	}, [allCampaignPosts, type]); 

	return (
		<div className={styles.campaignPostsMenu}>
			{/* {!postType && <SelectPostMenu onClick={setPostType} />} */}
			{activePosts.length > 0 && (
				<div className={styles.postsList}>
					{activePosts.map((post) => (
						<div key={post._id} className={styles.post}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CampaignPosts;
