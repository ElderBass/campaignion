export const SET_CAMPAIGN = "SET_CAMPAIGN";
export const setCampaigns = (campaign) => ({
    type: SET_CAMPAIGN,
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
