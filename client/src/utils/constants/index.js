export const ERROR_MESSAGE = {
	LOGIN: {
		404: "Huh, couldn't find any user with that email",
		GENERIC: "Something went wrong logging you in. Please try again",
		WRONG_PASSWORD: "Ooof. Wrong password there, bud.",
	},
	SIGNUP: {
		INVALID_EMAIL: "Perception check! That email doesn't look right...",
		PASSWORD_MISMATCH: "Crit fail! Your passwords don't match!",
	},
};

export const LOCAL_STORAGE_KEYS = {
	LOGGED_IN: "userLoggedIn",
};

export const CAMPAIGN_POST_TYPES = {
	ADVENTURE_LOG: "Adventure Log",
	NPC: "NPCs",
	LOOT: "Loot",
	LOCATION: "Locations",

};

export const CAMPAIGN_POST_TYPE_CONFIG = {
	ADVENTURE_LOG: {
		name: CAMPAIGN_POST_TYPES.ADVENTURE_LOG,
		icon: "book",
	},
	NPC: {
		name: CAMPAIGN_POST_TYPES.NPC,
		icon: "user",
	},
	LOOT: {
		name: CAMPAIGN_POST_TYPES.LOOT,
		icon: "dollar-sign",
	},
	LOCATION: {
		name: CAMPAIGN_POST_TYPES.LOCATION,
		icon: "map-marker",
	},
};
