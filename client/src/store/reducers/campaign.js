import * as CampaignActions from '../actions/campaign';

const INITIAL_STATE = {
    campaign: {},
    campaignPosts: [],
    activePostType: null,
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
        default:
            return state;
    }
};

export default campaign;
