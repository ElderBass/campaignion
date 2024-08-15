const mongoose = require("mongoose");
const db = require("./models");
const { ObjectId } = require("bson");
require("dotenv").config();

const MONGO_URI = process.env.MONGODB_URI;

const campaignId = new ObjectId("66ba83813384184bb62a701a");

const campaigns = [
    {
        name: "Curse of Strahd",
		description: "A campaign where the players are transported to the land of Barovia, a land ruled by the vampire Strahd.",
		dungeonMaster: {
			name: "Augie Henneck",
			email: "augie.henneck@gmail.com"
		},
		partyMembers: [
			{
				name: "Zireael Vatt'ghern",
				race: "Wood Elf",
				class: "Ranger",
				player: {
					name: "Seth Zygarlicke",
					email: "zenababy@gmail.com",
				}
			},
			{
				name: "Ryker Williams",
				race: "Human",
				class: "Paladin",
				player: {
					name: "Derek Spillers",
					email: "spillers9507@gmail.com",
				},
			},
			{
				name: "Tyraxes Arvoroth",
				race: "Dragonborn",
				class: "Warlock",
				player: {
					name: "John Eidem",
					email: "saferzero@gmail.com",
				},
			}
		]
    }
];


const seedCampaign = async (campaign) => {
	try {
		console.log("\n campaign in seed file = ", campaign, "\n");
		await db.Campaign.create(campaign);
	} catch (err) {
		console.log("\n \n error in seedPosts - ", err, "\n \n");
	}
};

const seedCampaigns = async () => {
	await mongoose
		.connect(MONGO_URI, { useUnifiedTopology: true })
		.then(() => console.log("DB Connected"))
		.catch((err) =>
			console.log("\n error connecting to DB in seed file = ", err, "\n")
		);

	campaigns.forEach(async (campaign) => {
		await seedCampaign(campaign);
	});
};

seedCampaigns();