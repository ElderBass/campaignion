import { campaigns } from "../data/campaigns";

export const getUserCampaigns = (userEmail, campaignList) => {
	if (!campaignList.length) {
		return campaigns;
	}

	return campaignList.filter((campaign) => {
		return (
			campaign.partyMembers.find(
				(member) => member.player.email === userEmail
			) || campaign.dungeonMaster.email === userEmail
		);
	});
};
