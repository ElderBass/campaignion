import { campaigns } from "../data/campaigns";

export const getUserCampaigns = (userEmail, campaignList) => {
	if (!campaignList.length) {
		return campaigns;
	}
	return campaignList.filter((campaign) => {
		return (
			campaign.players.some((player) => player.email === userEmail) ||
			campaign.dungeonMaster.email === userEmail
		);
	});
};
