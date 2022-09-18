import axios from "axios";
const urlUsers = "https://jsonplaceholder.typicode.com/users"

export const getListUsers = () => {
    return axios.get(urlUsers)
}

export const getUserById = id => {
    return axios.get(urlUsers + `/${id}`)
}