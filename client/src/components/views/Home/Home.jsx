import React, { useEffect, useState } from "react";
import store from "../../../store";
import { getAllCampaigns } from "../../../api";
import styles from "./Home.module.css";
import LoadingScreen from "../../common/LoadingScreen";
import { getUserCampaigns } from "../../../utils/getUserCampaigns";
import CampaignList from "../../common/CampaignList";

const Home = () => {
	const { user } = store.getState();

	const [userCampaigns, setUserCampagins] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getCampaigns = async () => {
			const response = await getAllCampaigns();
			console.log(
				"\n RESPONSE FROM GET ALL CAMPAIGNS ",
				response.data,
				"\n\n"
			);
			const usersCampaigns = getUserCampaigns(
				user.email,
				response.data.campaigns
			);
			setUserCampagins(usersCampaigns);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		};
		getCampaigns();
	}, [user]);

	return (
		<div className={styles.homePage}>
			{loading ? (
				<LoadingScreen />
			) : (
				<React.Fragment>
					<h1>Your Campaigns</h1>
					{userCampaigns.length > 0 ? (
						<CampaignList campaigns={userCampaigns} />
					) : (
						<p>No active campaigns</p>
					)}
				</React.Fragment>
			)}
		</div>
	);
};

export default Home;
