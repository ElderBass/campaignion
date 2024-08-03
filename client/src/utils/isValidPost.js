import store from "../store";
import { CAMPAIGN_POST_TYPES } from "./constants";

export const isValidPost = (postData) => {
	const { campaignPosts } = store.getState().campaign;
	const { title, description, type } = postData;

	const postAlreadyExists = campaignPosts.some(
		(post) => post.title === title
	);

	let isValid = false;
	let error = "";

	if (!title || !description) {
		error = "Intelligance save failed: Title and description are required.";
	} else if (
		type !== CAMPAIGN_POST_TYPES.ADVENTURE_LOG &&
		postAlreadyExists
	) {
		error = "Wisdom save failed: A post with this title already exists.";
	} else {
		isValid = true;
	}

	return { isValid, error };
};
