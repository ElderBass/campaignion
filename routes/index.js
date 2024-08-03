const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const campaignRoutes = require("./campaign");
const campaignPostRoutes = require("./campaignPost");

router.use("/users", userRoutes);
router.use("/campaigns", campaignRoutes);
router.use("/campaignPosts", campaignPostRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = {
    userRoutes,
    campaignRoutes,
    campaignPostRoutes,
};
