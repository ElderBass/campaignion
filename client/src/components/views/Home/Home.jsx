import React, { useEffect, useState } from "react";
import store from "../../../store";
import { getAllCampaigns } from "../../../api";
import styles from "./Home.module.css";

const Home = () => {
	const { user } = store.getState();
	console.log("\n user ", user, "\n");
	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		const getCampaigns = async () => {
			const response = await getAllCampaigns();
			setCampaigns(response.data);
		};
		getCampaigns();
	}, []);

	return (
		<div className={styles.homePage}>
			<h1>Home Page</h1>
			{campaigns.length > 0 ? (
				<div>
					<h2>Active Campaigns</h2>
					<ul>
						{campaigns.map((campaign) => (
							<li key={campaign.id}>{campaign.name}</li>
						))}
					</ul>
				</div>
			) : (
				<p>No active campaigns</p>
			)}
			{user.isAdmin && (
				<div>
					<h2>Admin Options</h2>
					<button>Create Campaign</button>
				</div>
			)}
		</div>
	);
};

export default Home;
