import axios from "axios";
export const api = axios.create({
    baseURL: 'http://localhost:3000'
})
const getUser = async() => {
    await api.get("/user/1")
}