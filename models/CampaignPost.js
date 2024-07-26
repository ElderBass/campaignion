const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CampaignPostSchema = new Schema({
	campaignId: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	titile: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	poster: {
		type: String,
		required: true,
	},
	dateAdded: {
		type: Date,
		default: Date.now,
	},
    comments: {
        type: Array,
        default: [],
    },
});

const CampaignPost = mongoose.model("CampaignPost", CampaignPostSchema);

module.exports = CampaignPost;
