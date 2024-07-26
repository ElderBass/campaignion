import React from "react";
import store from "../../../store";
import { faArrowLeft, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	setActivePostType,
	setPostSearchInput,
} from "../../../store/actions/campaign";
import styles from "./CampaignPostsHeader.module.css";

const CampaignPostsHeader = ({ type, searchInput }) => {

	const onChange = (e) => store.dispatch(setPostSearchInput(e.target.value));

	const goBack = () => store.dispatch(setActivePostType(null));

    const onAddPost = () => {};

	return (
		<div className={styles.campaignPostsHeader}>
			<div className={styles.campaignPostsHeaderRow}>
				<button className={styles.backButton} onClick={goBack}>
					<FontAwesomeIcon icon={faArrowLeft} size="2x" />
				</button>
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
