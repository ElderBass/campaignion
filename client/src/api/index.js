import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const addUser = (userData) =>
	axios.post("/api/dnd/users/signup", userData);
export const loginUser = (userData) =>
	axios.post("/api/dnd/users/login", userData);
export const getOneUser = (userId) =>
	axios.get(`/api/dnd/users/get-one/${userId}`);
export const getAllUsers = () => axios.get("/api/dnd/users/get-all");
export const updateUser = (user) =>
	axios.put("/api/dnd/users/update-user", { user });

export const getAllCampaigns = () => axios.get("/api/dnd/campaigns/all");
export const getOneCampaign = (campaignId) =>
	axios.get(`/api/dnd/campaigns/get-one/${campaignId}`);
export const addCampaign = (campaign) =>
	axios.post("/api/dnd/campaigns/add", { campaign });
export const assignPartyMember = ({ campaignId, user }) =>
	axios.put("/api/dnd/campaigns/assign-party-member", { campaignId, user });

export const getAllPosts = (campaignId) =>
	axios.get(`/api/dnd/posts/all/${campaignId}`);
export const getAllPostsOfType = (campaignId, postType) =>
	axios.get(`/api/dnd/posts/all/${campaignId}/${postType}`);
export const getOnePost = (postId) =>
	axios.get(`/api/dnd/posts/get-one/${postId}`);
export const addPost = (post) => axios.post("/api/dnd/posts/add", { post });
export const updatePost = (post) =>
	axios.put("/api/dnd/posts/update", { post });
