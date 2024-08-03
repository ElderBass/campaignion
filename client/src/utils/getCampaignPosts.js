import { getAllPosts } from "../api";
import store from "../store";
import { setActivePostType, setCampaignPosts } from "../store/actions/campaign";
import { fakeAdventureLog } from "../data/campaignPosts";

export const getCampaignPosts = async (resetPostType = true) => {
	const { activeCampaign } = store.getState().campaign;

	const campaignId = activeCampaign._id;
	if (resetPostType) {
		store.dispatch(setActivePostType(null));
	}
	const response = await getAllPosts(campaignId);
	let renderedPosts = fakeAdventureLog;
	if (response.data.posts.length) {
		renderedPosts = response.data.posts;
	}
	store.dispatch(setCampaignPosts(renderedPosts));
};
