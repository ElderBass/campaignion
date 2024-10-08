const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	partyMembers: {
		type: Array,
		default: [],
	},
	dungeonMaster: {
		type: {
            name: String,
            email: String,
        },
		required: true,
	},
	posts: {
		type: Array,
		default: [],
	},
});

const Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;
