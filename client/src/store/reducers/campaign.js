import * as CampaignActions from '../actions/campaign';

const INITIAL_STATE = {
    campaign: {},
    campaignPosts: [],
    activePostType: null,
    searchInput: "",
    filters: [],
};

const campaign = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CampaignActions.SET_CAMPAIGN:
            return {
                ...state,
                campaign: payload,
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
