import React from "react";
import classNames from "classnames";
import styles from "./PostComments.module.css";
import { formatCommentAuthorName } from "../../../utils/formatCommentAuthorName";

const PostComments = ({ comments }) => {
	return (
		<div className={styles.commentsContainer}>
			<h3 className={styles.heading}>Comments</h3>
			{comments.length > 0 ? (
				<React.Fragment>
					{comments.map((comment, i) => (
						<div
							key={i}
							className={classNames(styles.comment, {
								[styles.firstComment]: i === 0,
							})}
						>
							<p className={styles.author}>
								{formatCommentAuthorName(comment.author)}:
							</p>
							<p className={styles.text}>{comment.text}</p>
						</div>
					))}
				</React.Fragment>
			) : (
				<p>No one has commented on this post yet</p>
			)}
		</div>
	);
};

export default PostComments;
