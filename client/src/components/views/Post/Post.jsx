import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import store from "../../../store";
import { setActivePost } from "../../../store/actions/campaign";
import { setSuccessAlert } from "../../../store/actions/alert";
import { SUCCESS_ALERTS } from "../../../utils/constants";
import BackButton from "../../common/BackButton";
import { formatPostDate } from "../../../utils/formatPostDate";
import PostComments from "../../common/PostCommentsContainer/PostComments";
import AddComment from "../AddComment";
import styles from "./Post.module.css";

const Post = () => {
	const post = useSelector((state) => state.campaign.activePost);
	const history = useHistory();

	const [showAddComment, setShowAddComment] = useState(false);

	const { title, description, poster, dateAdded, comments } = post;
	const date = formatPostDate(dateAdded);

	const goBack = () => {
		store.dispatch(setActivePost(null));
		history.push(`/campaign/${post.campaignId}`);
	};

	const onAddCommentClick = () => setShowAddComment(true);

    const onExitAddCommentScreen = (dispatchAlert = false) => {
        setShowAddComment(false);
        if (dispatchAlert) {
            store.dispatch(setSuccessAlert(SUCCESS_ALERTS.ADD_COMMENT));
        }
    };

	return (
		<div className={styles.postPage}>
			{showAddComment ? (
				<AddComment post={post} exitScreen={onExitAddCommentScreen} />
			) : (
				<React.Fragment>
					<div className={styles.postActions}>
						<BackButton onClick={goBack} />
						<button
							className={styles.addCommentButton}
							onClick={onAddCommentClick}
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
				</React.Fragment>
			)}
		</div>
	);
};

export default Post;
