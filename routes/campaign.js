const router = require("express").Router();
const db = require("../models");
const bodyParser = require("body-parser");

router.get(
	"/api/dnd/campaigns/all",
	bodyParser.json(),
	async (req, res) => {
		try {
			const campaigns = await db.Campaign.find().sort({ name: 1 });
			res.json({ campaigns, isSuccess: true });
		} catch (e) {
			console.log("\n\n err in getting all campaigns = ", e, "\n\n");
			res.status(400).json({ isSuccess: false, error: e });
		}
	}
);

router.post(
    "/api/dnd/campaigns/add",
    bodyParser.json(),
    async (req, res) => {
        const { campaign } = req.body;

        try {
            const newCampaign = await db.Campaign.create(campaign);
            res.status(200).json({ campaign: newCampaign });
        } catch (e) {
            console.log("\n\n error in creating campaign = ", e, "\n\n");
            res.status(400).json({ error: e });
        }
    }
);

router.put(
	"/api/dnd/campaigns/assign-party-member",
	bodyParser.json(),
	async (req, res) => {
		const { user, campaignId } = req.body;
		const { _id } = user;

		try {
			const result = await db.Campaign.findByIdAndUpdate(_id, user, {
				new: true,
			});
			res.status(200).json({ user: result });
		} catch (e) {
			console.log(
				"\n error in assigning party member to campaign = ",
				e,
				"\n\n"
			);
			res.status(400).json({ error: e });
		}
	}
);

module.exports = router;
