import React from "react";
import store from "../../../store";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActivePostType } from "../../../store/actions/campaign";
import styles from "./CampaignPostsHeader.module.css";

const CampaignPostsHeader = ({ type }) => {
    const goBack = () => store.dispatch(setActivePostType(null));

    return (
        <div className={styles.campaignPostsHeader}>
            <button className={styles.backButton} onClick={goBack}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            </button>
            <h2>{type}</h2>
        </div>
    );
};

export default CampaignPostsHeader;