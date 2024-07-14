import React from "react";
import styles from "./CampaignDetailScreen.module.css";

const CampaignDetailScreen = ({ campaign, goBack }) => {
    const { name, description, dungeonMaster } = campaign;

    return (
        <div className={styles.campaignDetail}>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>
                <span className={styles.dm}>Dungeon Master:</span>{" "}
                {dungeonMaster.name}
            </p>
        </div>
    );
};

export default CampaignDetailScreen;
