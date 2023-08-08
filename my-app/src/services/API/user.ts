import API from "./API";
import {PropsReg} from "../../components/auth/sign-up/SignUp";

export const getUsers = async () => {
    const response = await API.get("/users")
    return response.data
}

export const registerUser = async (user: PropsReg) => {
    return await API.post("/register", user)
}

export const loginUser = async (user: any) => {
    return await API.post("/login", user)
}