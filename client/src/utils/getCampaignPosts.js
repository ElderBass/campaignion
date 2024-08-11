import { getAllPosts } from "../api";
import store from "../store";
import { setCampaignPosts } from "../store/actions/campaign";
import { fakeAdventureLog } from "../data/campaignPosts";

export const getCampaignPosts = async () => {
	const { activeCampaign } = store.getState().campaign;

	const campaignId = activeCampaign._id;

	const response = await getAllPosts(campaignId);

	let renderedPosts = fakeAdventureLog;
	if (response.data.posts.length) {
		renderedPosts = response.data.posts;
	}
	store.dispatch(setCampaignPosts(renderedPosts));
};
