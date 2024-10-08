const router = require("express").Router();
const db = require("../models");
const bodyParser = require("body-parser");

router.get("/api/dnd/posts/all/:campaignId", bodyParser.json(), async (req, res) => {
	const { campaignId } = req.params;
	console.log("\n campaignId in get all posts = ", campaignId, "\n");

	try {
		const posts = await db.CampaignPost.find({ campaignId }).sort({
			dateAdded: -1,
		});
		console.log("\n posts in get all posts = ", posts, "\n");
		res.json({ posts, isSuccess: true });
	} catch (e) {
		console.log("\n\n err in getting all posts = ", e, "\n\n");
		res.status(400).json({ isSuccess: false, error: e });
	}
});

router.get(
	"/api/dnd/posts/get-one/:postId",
	bodyParser.json(),
	async (req, res) => {
		const { postId } = req.params;

		try {
			const post = await db.CampaignPost.findOne({ _id: postId });
			res.status(200).json({ post });
		} catch (err) {
			console.log(
				"\n\n err inside get one post controller",
				err,
				"\n \n"
			);
			res.status(400).json({ isSuccess: false, error: err });
		}
	}
);

router.post("/api/dnd/posts/add", bodyParser.json(), async (req, res) => {
	const { post } = req.body;

	console.log("\n post in add post = ", post, "\n");

	try {
		const newPost = await db.CampaignPost.create(post);
		res.status(200).json({ post: newPost });
	} catch (e) {
		console.log("\n\n error in creating post = ", e, "\n\n");
		res.status(400).json({ error: e });
	}
});

router.put("/api/dnd/posts/update", bodyParser.json(), async (req, res) => {
	const { post } = req.body;

	try {
		const updatedPost = await db.CampaignPost.findOneAndUpdate(
			{ _id: post._id },
			post,
			{ new: true }
		);
		res.status(200).json({ post: updatedPost });
	} catch (e) {
		console.log("\n\n error in updating post = ", e, "\n\n");
		res.status(400).json({ error: e });
	}
});

module.exports = router;
