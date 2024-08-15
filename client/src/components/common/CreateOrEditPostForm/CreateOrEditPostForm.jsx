import React, { useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import store from "../../../store";
import { setSuccessAlert } from "../../../store/actions/alert";
import { SUCCESS_ALERTS } from "../../../utils/constants";
import { isValidPost } from "../../../utils/isValidPost";
import { getPosterName } from "../../../utils/getPosterName";
import { addPost, updatePost } from "../../../api";
import { getCampaignPosts } from "../../../utils/getCampaignPosts";
import { setActivePost } from "../../../store/actions/campaign";
import styles from "./CreateOrEditPostForm.module.css";

const CreateOrEditPostForm = () => {
	const {
		state: { type, postToEdit = null },
	} = useLocation();

	const {
		activeCampaign: { _id },
	} = store.getState().campaign;

	const history = useHistory();

	const [title, setTitle] = useState(postToEdit ? postToEdit.title : "");
	const [description, setDescription] = useState(
		postToEdit ? postToEdit.description : ""
	);
	const [error, setError] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		const postData = {
			type,
			title,
			description,
			poster: getPosterName(),
			campaignId: _id,
			_id: postToEdit ? postToEdit._id : null,
		};

		const { isValid, error } = isValidPost(postData);

		if (!isValid) {
			setError(error);
			return;
		}

		try {
			const axiosFunc = postToEdit ? updatePost : addPost;
			const response = await axiosFunc(postData);

			if (postToEdit) {
				store.dispatch(setActivePost(response.data.post));
			}
			await getCampaignPosts();
			onCancelOrGoBack(true);
		} catch (e) {
			console.log("\n ERROR CREATING/EDITING POST ", e, "\n\n");
			setError(
				"Constitution saving throw failed: Something went wrong submitting your post, please roll again."
			);
		}
	};

	const submitDisabled = useMemo(() => {
		return !title || !description;
	}, [title, description]);

	const resetState = () => {
		setTitle("");
		setDescription("");
		setError("");
	};

	const onCancelOrGoBack = (dispatchAlert = false) => {
		resetState();
		const path = postToEdit
			? `/post/${postToEdit._id}`
			: `/campaign/${_id}`;
		history.push(path);
		if (dispatchAlert) {
			store.dispatch(setSuccessAlert(SUCCESS_ALERTS.ADD_POST));
		}
	};

	const formTitle = postToEdit ? "Edit Post" : "Create a Post";

	return (
		<div className={styles.createPostFormContainer}>
			<h1>{formTitle}</h1>
			{error && <p className={styles.error}>{error}</p>}
			<form className={styles.createPostForm} onSubmit={onSubmit}>
				<label htmlFor="title" />
				<input
					className={classNames(styles.titleInput, styles.formInput)}
					onChange={(e) => setTitle(e.target.value)}
					id="title"
					name="title"
					placeholder="Give it a title"
					value={title}
				/>
				<label htmlFor="description" />
				<textarea
					className={classNames(styles.textArea, styles.formInput)}
					onChange={(e) => setDescription(e.target.value)}
					id="description"
					name="description"
					placeholder="Add a description"
					value={description}
				/>
				<div className={styles.actions}>
					<button
						className={classNames(
							styles.formButton,
							styles.submitButton
						)}
						type="submit"
						disabled={submitDisabled}
					>
						Submit
					</button>
					<button
						className={classNames(
							styles.formButton,
							styles.cancelButton
						)}
						onClick={() => onCancelOrGoBack(false)}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateOrEditPostForm;
