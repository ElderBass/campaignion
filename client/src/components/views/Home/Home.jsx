import React, { useEffect, useState } from "react";
import store from "../../../store";
import { getAllCampaigns } from "../../../api";
import { campaigns as testCampaigns } from "../../../data/campaigns";
import styles from "./Home.module.css";
import LoadingScreen from "../../common/LoadingScreen";
import CampaignCard from "../../common/CampaignCard";

const Home = () => {
	const { user } = store.getState();
	console.log("\n user ", user, "\n");
	const [campaigns, setCampaigns] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCampaigns = async () => {
			const response = await getAllCampaigns();
			console.log("\n response ", response, "\n\n");
			setCampaigns(testCampaigns);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		};
		getCampaigns();
	}, []);

	return (
		<div className={styles.homePage}>
			{loading ? (
				<LoadingScreen />
			) : (
				<React.Fragment>
					<h1>Select a Campaign</h1>
					{campaigns.length > 0 ? (
						<div className={styles.campaignList}>
							{campaigns.map((campaign) => (
								<CampaignCard campaign={campaign} />
							))}
						</div>
					) : (
						<p>No active campaigns</p>
					)}
				</React.Fragment>
			)}
		</div>
	);
};

export default Home;
