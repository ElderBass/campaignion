import store from "../store";

export const getPosterName = () => {
	const { user, campaign } = store.getState();
	const { partyMembers } = campaign.activeCampaign;
	const partyMember = partyMembers.find(
		(member) => member.player.email === user.email
	);
	return partyMember.name;
};
