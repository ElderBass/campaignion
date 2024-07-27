import React, { useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import store from "../../../store";
import { isValidPost } from "../../../utils/isValidPost";
import { getPosterName } from "../../../utils/getPosterName";
import styles from "./CreatePostForm.module.css";
import { addPost } from "../../../api";

const CreatePostForm = () => {
	const {
		state: { type },
	} = useLocation();

    const {
        activeCampaign: { _id },
    } = store.getState().campaign;

	const history = useHistory();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		const postData = {
			type,
			title,
			description,
			poster: getPosterName(),
			campaignId: _id,
		};

		const { isValid, error } = isValidPost(postData);

		if (!isValid) {
			setError(error);
			return;
		}

		try {
			const response = await addPost(postData);
			console.log("\n RESPONSE FROM CREATE POST ", response, "\n\n");
			resetState();
		} catch (e) {
			console.log("\n ERROR CREATING POST ", e, "\n\n");
			setError(
				"Constitution saving throw failed: Something went wrong creating your post, please roll again."
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

	const onCancelClick = () => {
		resetState();
		history.push(`/campaign/${_id}`);
	};

	return (
		<div className={styles.createPostFormContainer}>
			<h1>Create a Post</h1>
			{error && <p className={styles.error}>{error}</p>}
			<form className={styles.createPostForm} onSubmit={onSubmit}>
				<label htmlFor="title" />
				<input
					className={classNames(styles.titleInput, styles.formInput)}
					onChange={(e) => setTitle(e.target.value)}
					id="title"
					name="title"
					placeholder="Give it a title"
				/>
				<label htmlFor="description" />
				<textarea
					className={classNames(styles.textArea, styles.formInput)}
					onChange={(e) => setDescription(e.target.value)}
					id="description"
					name="description"
					placeholder="Add a description"
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
						onClick={onCancelClick}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePostForm;
