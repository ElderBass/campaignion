const ADD_USER = "ADD_USER";
const addUser = (user) => ({
	type: ADD_USER,
	payload: user,
});

const LOG_IN_USER = "LOG_IN_USER";
const loginUser = (user) => ({
	type: LOG_IN_USER,
	payload: user,
});

const LOG_OUT_USER = "LOG_OUT_USER";
const logoutUser = () => ({
	type: LOG_OUT_USER,
});

const UPDATE_USER = "UPDATE_USER";
const updateUser = (user) => ({
	type: UPDATE_USER,
	payload: user,
});

export {
	ADD_USER,
	addUser,
	LOG_IN_USER,
	loginUser,
	LOG_OUT_USER,
	logoutUser,
	UPDATE_USER,
	updateUser,
};
