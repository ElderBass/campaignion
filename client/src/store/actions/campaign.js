export const SET_CAMPAIGNS = "SET_CAMPAIGNS";
export const setCampaigns = (campaign) => ({
	type: SET_CAMPAIGNS,
	payload: campaign,
});

export const SET_ACTIVE_CAMPAIGN = "SET_ACTIVE_CAMPAIGN";
export const setActiveCampaign = (campaign) => ({
	type: SET_ACTIVE_CAMPAIGN,
	payload: campaign,
});

export const SET_CAMPAIGN_POSTS = "SET_CAMPAIGN_POSTS";
export const setCampaignPosts = (posts) => ({
	type: SET_CAMPAIGN_POSTS,
	payload: posts,
});

export const SET_ACTIVE_POST_TYPE = "SET_ACTIVE_POST_TYPE";
export const setActivePostType = (postType) => ({
	type: SET_ACTIVE_POST_TYPE,
	payload: postType,
});

export const SET_ACTIVE_POST = "SET_ACTIVE_POST";
export const setActivePost = (post) => ({
	type: SET_ACTIVE_POST,
	payload: post,
});

export const SET_POST_SEARCH_INPUT = "SET_POST_SEARCH_INPUT";
export const setPostSearchInput = (input) => ({
	type: SET_POST_SEARCH_INPUT,
	payload: input,
});

export const SET_POST_FILTERS = "SET_POST_FILTERS";
export const setPostFilters = (filters) => ({
	type: SET_POST_FILTERS,
	payload: filters,
});

export const RESET = "RESET";
export const reset = () => ({
	type: RESET,
});
