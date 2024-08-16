import store from "../store";

export const canEditPost = (postAuthor, userEmail) => {
	const { activeCampaign } = store.getState().campaign;
	const { partyMembers } = activeCampaign;

	const userPartyMember = partyMembers.find(
		(partyMember) => partyMember.player.email === userEmail
	);

	if (
		postAuthor === userPartyMember.name ||
		activeCampaign.dungeonMaster.email === userEmail
	) {
		return true;
	}
	return false;
};
