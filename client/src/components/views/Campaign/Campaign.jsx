import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllPosts } from "../../../api";
import store from "../../../store";
import { setCampaignPosts } from "../../../store/actions";
import styles from "./Campaign.module.css";
import LoadingScreen from "../../common/LoadingScreen";

const Campaign = () => {
	const {
		state: { campaign },
	} = useLocation();

	const [showCampaignMenu, setShowCampaignMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, description, dungeonMaster, _id } = campaign;

	useEffect(() => {
		const getPosts = async () => {
			setLoading(true);
			const response = await getAllPosts(_id);
			let renderedPosts = [];
			if (response.data.posts) {
				renderedPosts = response.data.posts;
				setShowCampaignMenu(true);
			}
			store.dispatch(setCampaignPosts(renderedPosts));
			setLoading(false);
		};

		getPosts();
	}, [_id]);

	return (
		<div className={styles.campaignPage}>
			<h1>{name}</h1>
			<p>{description}</p>
			<p>
				<span className={styles.dm}>Dungeon Master:</span>{" "}
				{dungeonMaster.name}
			</p>
			{loading && <LoadingScreen />}
			{showCampaignMenu && (
				<div>chabuddy</div>
				// <CampaignPostsMenu campaignPostTypes={campaignPostTypes} />
			)}

		</div>
	);
};

export default Campaign;
