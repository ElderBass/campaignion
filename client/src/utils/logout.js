import store from "../store";
import { reset } from "../store/actions/campaign";
import * as UserActions from "../store/actions/user";
import { LOCAL_STORAGE_KEYS, SUCCESS_ALERTS } from "./constants";
import { setSuccessAlert } from "../store/actions/alert";

export const logout = () => {
	localStorage.setItem(LOCAL_STORAGE_KEYS.LOGGED_IN, false);
	store.dispatch(UserActions.logoutUser());
    store.dispatch(reset([]));
    store.dispatch(setSuccessAlert(SUCCESS_ALERTS.LOGOUT));
};
