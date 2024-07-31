import * as CampaignActions from "../actions/campaign";

const INITIAL_STATE = {
	activeCampaign: null,
	campaigns: [],
	campaignPosts: [],
	activePostType: null,
	activePost: null,
	searchInput: "",
	filters: [],
};

const campaign = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CampaignActions.SET_ACTIVE_CAMPAIGN:
			return {
				...state,
				activeCampaign: payload,
			};
		case CampaignActions.SET_CAMPAIGNS:
			return {
				...state,
				campaigns: payload,
			};
		case CampaignActions.SET_CAMPAIGN_POSTS:
			return {
				...state,
				campaignPosts: payload,
			};
		case CampaignActions.SET_ACTIVE_POST_TYPE:
			return {
				...state,
				activePostType: payload,
			};
		case CampaignActions.SET_ACTIVE_POST:
			return {
				...state,
				activePost: payload,
			};
		case CampaignActions.SET_POST_SEARCH_INPUT:
			return {
				...state,
				searchInput: payload,
			};
		case CampaignActions.SET_POST_FILTERS:
			return {
				...state,
				filters: payload,
			};
		default:
			return state;
	}
};

export default campaign;
