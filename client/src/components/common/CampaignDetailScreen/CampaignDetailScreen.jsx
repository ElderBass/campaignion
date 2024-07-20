import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./CampaignDetailScreen.module.css";
import CampaignPostMenu from "../CampaignPostMenu";

const CampaignDetailScreen = ({ campaign }) => {
    const { name, partyMembers, dungeonMaster } = campaign;

	return (
		<React.Fragment>
			<h1>{name}</h1>
			<p>
				<span className={styles.dm}>Dungeon Master:</span>{" "}
				{dungeonMaster.name}
			</p>
			<CampaignPostMenu />
			<Accordion className={styles.accordionDeal}>
				<Accordion.Item className={styles.accordionItem} eventKey="0">
					<Accordion.Header className={styles.accordionHeader}>
						Party
					</Accordion.Header>
					<Accordion.Body>
						<ul>
							{partyMembers.map((member) => (
								<li key={member.name}>{member.name}</li>
							))}
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</React.Fragment>
	);
};

export default CampaignDetailScreen;
