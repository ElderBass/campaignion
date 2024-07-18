import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllPosts } from "../../../api";
import styles from "./Campaign.module.css";

const Campaign = () => {
	const {
		state: { campaign },
	} = useLocation();

	const { name, description, dungeonMaster, _id } = campaign;

	const [campaignPosts, setCampaignPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const response = await getAllPosts(_id);
			let renderedPosts = [];
			if (response.data.posts) {
				renderedPosts = response.data.posts;
			}
			setCampaignPosts(renderedPosts);
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
			{campaignPosts.length > 0 ? (
				<div className={styles.postsList}>
					{campaignPosts.map((post) => (
						<div key={post._id} className={styles.post}>
							<h3>{post.title}</h3>
							<p>{post.content}</p>
						</div>
					))}
				</div>
			) : (
				<div>No posts for this campaign</div>
			)}
		</div>
	);
};

export default Campaign;
