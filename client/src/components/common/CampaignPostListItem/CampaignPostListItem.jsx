import React from "react";
import { useHistory } from "react-router-dom";
import store from "../../../store";
import { setActivePost } from "../../../store/actions/campaign";
import styles from "./CampaignPostListItem.module.css";
import { formatPostDate } from "../../../utils/formatPostDate";

const CampaignPostListItem = ({ post }) => {
	const history = useHistory();

	const { title, description, poster, dateAdded } = post;
	const date = formatPostDate(dateAdded);

	const onPostClick = () => {
		store.dispatch(setActivePost(post));
		history.push(`/post/${post._id}`);
	};

	return (
		<div onClick={onPostClick} className={styles.postListItem}>
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
