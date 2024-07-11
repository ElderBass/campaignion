import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

const addUser = (userData) => axios.post("/api/dnd/users/signup", userData);
const loginUser = (userData) => axios.post("/api/dnd/users/login", userData);
const getOneUser = (userId) => axios.get(`/api/dnd/users/get-one/${userId}`);
const getAllUsers = () => axios.get("/api/dnd/users/get-all");
const updateUser = (user) => axios.put("/api/dnd/users/update-user", { user });

export { addUser, loginUser, getOneUser, getAllUsers, updateUser };
