import React from "react";
import dayjs from "../../../utils/dayjs";
import styles from "./CampaignPostListItem.module.css";

const CampaignPostListItem = ({ post }) => {
	const { title, description, poster, dateAdded } = post;
	const date = dayjs(dateAdded).format("MMMM D, YYYY");

	return (
		<div className={styles.postListItem}>
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<div className={styles.deets}>
				<div className={styles.deet}>
					<p className={styles.detail}>Posted by:</p>
					<p className={styles.span}>{poster}</p>
				</div>
				<div className={styles.deet}>
					<p className={styles.detail}>Date posted:</p>
					<p className={styles.span}>{date}</p>
				</div>
			</div>
		</div>
	);
};

export default CampaignPostListItem;
