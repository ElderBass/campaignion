import React from "react";
import dayjs from "../../../utils/dayjs";
import styles from "./CampaignPostListItem.module.css";

const CampaignPostListItem = ({ post }) => {
	const { description, poster, dateAdded } = post;
	const date = dayjs(dateAdded).format("MMMM D, YYYY");

	return (
		<div className={styles.postListItem}>
			<p>{description}</p>
			<p className={styles.detail}>
				Posted by: <span className={styles.span}>{poster}</span>
			</p>
			<p className={styles.detail}>
				Date posted: <span className={styles.span}>{date}</span>
			</p>
		</div>
	);
};

export default CampaignPostListItem;
