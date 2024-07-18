import { combineReducers } from "redux";
import user from "./user";
import campaign from "./campaign";

const appReducer = combineReducers({
	user,
	campaign,
});

export default function rootReducer(state, action) {
	return appReducer(state, action);
}
