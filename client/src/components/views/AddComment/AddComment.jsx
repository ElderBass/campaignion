import React, { useState } from "react";
import classNames from "classnames";
import { updatePost } from "../../../api";
import { getPosterName } from "../../../utils/getPosterName";
import { getCampaignPosts } from "../../../utils/getCampaignPosts";
import store from "../../../store";
import { setActivePost } from "../../../store/actions/campaign";
import styles from "./AddComment.module.css";

const AddComment = ({ post, exitScreen }) => {
	const [comment, setComment] = useState("");
	const [error, setError] = useState("");

	const onChange = (e) => setComment(e.target.value);

	const onSubmit = async (e) => {
		e.preventDefault();

		const postData = {
			...post,
			comments: [
				...post.comments,
				{ author: getPosterName(), text: comment },
			],
		};

		try {
			const response = await updatePost(postData);
			store.dispatch(setActivePost(response.data.post));
			await getCampaignPosts();
			exitScreen(true);
		} catch (e) {
			console.log("\n ERROR ADDING COMMENT ", e, "\n\n");
			setError(e.message);
		}
	};

	return (
		<div className={styles.addCommentFormContainer}>
			<h2 className={styles.heading}>Comment on "{post.title}"</h2>
			<div className={styles.errorContainer}>
				{error && <p>{error}</p>}
			</div>
			<form className={styles.addCommentForm} onSubmit={onSubmit}>
				<textarea
					className={classNames(styles.textArea, styles.formInput)}
					value={comment}
					onChange={onChange}
					placeholder="Add a comment..."
				/>
				<div className={styles.actions}>
					<button
						className={classNames(
							styles.formButton,
							styles.submitButton
						)}
						type="submit"
						disabled={!comment.length}
					>
						Submit
					</button>
					<button
						className={classNames(
							styles.formButton,
							styles.cancelButton
						)}
						onClick={exitScreen}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
