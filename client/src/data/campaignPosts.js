// campaignId: {
//     type: String,
//     required: true,
// },
// type: {
//     type: String,
//     required: true,
// },
// description: {
//     type: String,
//     required: true,
// },
// poster: {
//     type: String,
//     required: true,
// },
// dateAdded: {
//     type: Date,
//     default: Date.now,
// },
// comments: {
//     type: Array,
//     default: [],
// },

const campaignId = "60b3b3b3b3b3b3b3b3b3b3";
const dateAdded = new Date().toISOString();

export const fakeAdventureLog = [
	{
		_id: "1",
		campaignId,
		type: "Adventure Log",
		description: "The party has set out on their journey to the mountains.",
		poster: "Avallynd Sylvaranth",
		dateAdded,
		comments: [],
	},
	{
		_id: "2",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has reached the mountains and found the entrance to the cave.",
		poster: "D'wellen Blackfin",
		dateAdded,
		comments: [],
	},
	{
		_id: "13",
		campaignId,
		type: "Adventure Log",
		description: "The party has defeated the dragon and saved the village.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		dateAdded,
		comments: [],
	},
	{
		_id: "4",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has returned to the village and is hailed as heroes.",
		poster: "Tab Machina",
		dateAdded,
		comments: [],
	},
	{
		_id: "5",
		campaignId,
		type: "Adventure Log",
		description: "The party has decided to set out on a new adventure.",
		poster: "Avallynd Sylvaranth",
		dateAdded,
		comments: [],
	},
	{
		_id: "6",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has reached the city and is searching for information.",
		poster: "D'wellen Blackfin",
		dateAdded,
		comments: [],
	},
	{
		_id: "7",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has found the information they were looking for and are preparing to set out.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		dateAdded,
		comments: [],
	},
	{
		_id: "8",
		campaignId,
		type: "Adventure Log",
		description: "The party has set out on their new adventure.",
		poster: "Tab Machina",
		dateAdded,
		comments: [],
	},
	{
		_id: "9",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has reached the dungeon and is preparing to enter.",
		poster: "Avallynd Sylvaranth",
		dateAdded,
		comments: [],
	},
	{
		_id: "10",
		campaignId,
		type: "Adventure Log",
		description: "The party has defeated the boss and found the treasure.",
		poster: "D'wellen Blackfin",
		dateAdded,
		comments: [],
	},
	{
		_id: "11",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has returned to the city and is hailed as heroes.",
		poster: "Silver Sickle Moon Sparkling Mountain",
		dateAdded,
		comments: [],
	},
	{
		_id: "12",
		campaignId,
		type: "Adventure Log",
		description: "The party has decided to set out on a new adventure.",
		poster: "Tab Machina",
		dateAdded,
		comments: [],
	},
	{
		_id: "23",
		campaignId,
		type: "Adventure Log",
		description:
			"The party has reached the city and is searching for information.",
		poster: "Avallynd Sylvranth",
		dateAdded,
		comments: [],
	},
];
