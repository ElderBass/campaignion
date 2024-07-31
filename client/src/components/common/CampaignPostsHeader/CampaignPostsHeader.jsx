import React from "react";
import { useHistory } from "react-router-dom";
import store from "../../../store";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	setActivePostType,
	setPostSearchInput,
} from "../../../store/actions/campaign";
import styles from "./CampaignPostsHeader.module.css";
import BackButton from "../BackButton/BackButton";

const CampaignPostsHeader = ({ type, searchInput }) => {
    const history = useHistory();

	const onChange = (e) => store.dispatch(setPostSearchInput(e.target.value));

	const goBack = () => {
        store.dispatch(setPostSearchInput(""));
        store.dispatch(setActivePostType(null));
    };

    const onAddPost = () => history.push("/create-post", { type });

	return (
		<div className={styles.campaignPostsHeader}>
			<div className={styles.campaignPostsHeaderRow}>
				<BackButton onClick={goBack} />
				<h2>{type}</h2>
                <button className={styles.addPostButton} onClick={onAddPost}>
                    Add
                </button>
			</div>
			<div className={styles.campaignPostsHeaderRow}>
				<input
					className={styles.searchInput}
					value={searchInput}
					onChange={onChange}
					placeholder="Sift by title, description, or poster"
				/>
                <FontAwesomeIcon className={styles.filterIcon} icon={faSliders} size="1x" />
			</div>
		</div>
	);
};

export default CampaignPostsHeader;
