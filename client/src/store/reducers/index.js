import { combineReducers } from "redux";
import user from "./user";

const appReducer = combineReducers({
	user,
});

export default function rootReducer(state, action) {
	return appReducer(state, action);
}
