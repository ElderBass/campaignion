export const getPartyMemberLink = (memberName) => {
	return `/partyMember/${memberName.split(" ").join("-").toLowerCase()}`;
};
