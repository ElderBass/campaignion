import React from "react";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import CampaignPostMenu from "../CampaignPostMenu";
import { getPartyMemberLink } from "../../../utils/getPartyMemberLink";
import styles from "./CampaignDetailScreen.module.css";

const CampaignDetailScreen = ({ campaign }) => {
	const history = useHistory();

	const { name, partyMembers, dungeonMaster } = campaign;

	const onMemberClick = (member) => {
		history.push(getPartyMemberLink(member.name), { member });
	};

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
					<Accordion.Header>Party</Accordion.Header>
					<Accordion.Body>
						<ul>
							{partyMembers.map((member) => (
								<li
									key={member.name}
									className={styles.accordionListItem}
									onClick={() => onMemberClick(member)}
								>
									{member.name}
								</li>
							))}
						</ul>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</React.Fragment>
	);
};

export default CampaignDetailScreen;
