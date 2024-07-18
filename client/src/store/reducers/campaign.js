import * as CampaignActions from '../actions/campaign';

const INITIAL_STATE = {
    campaign: {},
    campaignPosts: [],
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
        default:
            return state;
    }
};

export default campaign;
