import { trimEmail } from "../../utils/emailUtils";
import * as UserActions from "../actions/user";

const INITIAL_STATE = {
	decks: [],
	email: "",
	username: "",
	isAdmin: false,
	favorites: [],
	following: [],
	_id: "",
	token: "",
	isLoggedIn: false,
};

function user(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case UserActions.ADD_USER:
			return {
				...state,
				username: payload.username,
				email: payload.email,
				password: payload.password,
			};
		case UserActions.LOG_IN_USER:
			const { user, token } = payload;
			const isAdmin = user.email === process.env.REACT_APP_ADMIN_EMAIL;
			const username = trimEmail(user.email);
			return { ...user, username, token, isLoggedIn: true, isAdmin };
		case UserActions.LOG_OUT_USER:
			return INITIAL_STATE;
		case UserActions.UPDATE_USER:
			return payload;
		default:
			return state;
	}
}

export default user;
