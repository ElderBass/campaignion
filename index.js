const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const UserRoutes = require("./routes/user");
const CampaignRoutes = require("./routes/campaign");
const CampaignPostRoutes = require("./routes/campaignPost");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
	next();
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(UserRoutes);
app.use(CampaignRoutes);
app.use(CampaignPostRoutes);

app.get("/*", (req, res) =>
	res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

const MONGO_URI = process.env.MONGODB_URI;

mongoose
	.connect(MONGO_URI, { useUnifiedTopology: true })
	.then(() => console.log("DB Connected"))
	.catch((err) =>
		console.log("\n error connecting to MongoDB = ", err, "\n")
	);

app.listen(PORT, function () {
	console.log(
		`🌎  ==> API Server now listening on PORT http://localhost:${PORT} !`
	);
});
