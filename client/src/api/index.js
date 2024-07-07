import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";

const addUser = (userData) => axios.post("/api/users/signup", userData);
const loginUser = (userData) => axios.post("/api/users/login", userData);
const getOneUser = (userId) => axios.get(`/api/users/get-one/${userId}`);
const getAllUsers = () => axios.get("/api/users/get-all");
const updateUser = (user) => axios.put("/api/users/update-user", { user });

export { addUser, loginUser, getOneUser, getAllUsers, updateUser };
