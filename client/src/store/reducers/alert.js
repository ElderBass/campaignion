import * as AlertActions from "../actions/alert";

const INITIAL_STATE = {
	successAlert: null,
};

const alert = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case AlertActions.SET_SUCCESS_ALERT:
			return {
				...state,
				successAlert: payload,
			};
		default:
			return state;
	}
};

export default alert;
