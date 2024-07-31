import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../../store";
import { setActivePost } from "../../../store/actions/campaign";
import BackButton from "../../common/BackButton";
import styles from "./Post.module.css";
import { formatPostDate } from "../../../utils/formatPostDate";
import PostComments from "../../common/PostCommentsContainer/PostComments";

const Post = () => {
	const post = useSelector((state) => state.campaign.activePost);

	const { title, description, poster, dateAdded, comments } = post;
	const date = formatPostDate(dateAdded);

	const history = useHistory();

	const goBack = () => {
		store.dispatch(setActivePost(null));
		history.push(`/campaign/${post.campaignId}`);
	};

	const onAddComment = () => {};

	return (
		<div className={styles.postPage}>
			<div className={styles.postActions}>
				<BackButton onClick={goBack} />
				<button
					className={styles.addCommentButton}
					onClick={onAddComment}
				>
					Comment
				</button>
			</div>
			<div className={styles.postBody}>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className={styles.postDeets}>
					<div className={styles.postDeet}>
						<p>Posted by:</p>
						<p className={styles.deet}>{poster}</p>
					</div>
					<div className={styles.postDeet}>
						<p>Date posted:</p>
						<p className={styles.deet}>{date}</p>
					</div>
				</div>
				<PostComments comments={comments} />
			</div>
		</div>
	);
};

export default Post;
