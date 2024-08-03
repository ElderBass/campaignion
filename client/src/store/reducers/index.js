import { combineReducers } from "redux";
import alert from "./alert";
import user from "./user";
import campaign from "./campaign";

const appReducer = combineReducers({
	alert,
	user,
	campaign,
});

export default function rootReducer(state, action) {
	return appReducer(state, action);
}
