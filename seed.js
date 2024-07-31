const mongoose = require("mongoose");
const db = require("./models");
const { ObjectId } = require("bson");
require("dotenv").config();

const MONGO_URI = process.env.MONGODB_URI;

const campaignId = new ObjectId("66a567b4aea166a1c491174d");

const posts = [
	{
		campaignId,
		type: "Adventure Log",
		title: "The Journey Begins",
		description: "The party has set out on their journey to the mountains.",
		poster: "Avallynd Sylvaranth",
		comments: [
			{
				author: "D'wellen Blackfin",
				text: "Talos be praised!",
			},
			{
				author: "Silver Sickle Moon Sparkling Mountain",
				text: "I'm so excited!",
			},
			{
				author: "Tab Machina",
				text: "Let's do this!",
			},
		],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "The Cave Entrance",
		description:
			"The party has reached the mountains and found the entrance to the cave.",
		poster: "D'wellen Blackfin",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Fuck that dragon",
		description: "The party has defeated the dragon and saved the village.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "WE DID IT",
		description:
			"The party has returned to the village and is hailed as heroes.",
		poster: "Tab Machina",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "ANOTHER ONE",
		description: "The party has decided to set out on a new adventure.",
		poster: "Avallynd Sylvaranth",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Info time",
		description:
			"The party has reached the city and is searching for information.",
		poster: "D'wellen Blackfin",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Hittin' the road",
		description:
			"The party has found the information they were looking for and are preparing to set out.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "New Adventure",
		description: "The party has set out on their new adventure.",
		poster: "Tab Machina",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Dungeon Time",
		description:
			"The party has reached the dungeon and is preparing to enter.",
		poster: "Avallynd Sylvaranth",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Boss Fight",
		description: "The party has defeated the boss and found the treasure.",
		poster: "D'wellen Blackfin",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "WE DID IT...AGAIN",
		description:
			"The party has returned to the city and is hailed as heroes.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Another One",
		description: "The party has decided to set out on a new adventure.",
		poster: "Tab Machina",
		comments: [],
	},
	{
		campaignId,
		type: "Adventure Log",
		title: "Info Time",
		description:
			"The party has reached the city and is searching for information.",
		poster: "Avallynd Sylvranth",
		comments: [],
	},
];

const seedPost = async (post) => {
	try {
		console.log("\n post in seedPost = ", post, "\n");
		await db.CampaignPost.create(post);
	} catch (err) {
		console.log("\n \n error in seedPosts - ", err, "\n \n");
	}
};

const seedAllPosts = async () => {
	await mongoose
		.connect(MONGO_URI, { useUnifiedTopology: true })
		.then(() => console.log("DB Connected"))
		.catch((err) =>
			console.log("\n error connecting to DB in seed file = ", err, "\n")
		);

	posts.forEach(async (user) => {
		await seedPost(user);
	});
};

seedAllPosts();
