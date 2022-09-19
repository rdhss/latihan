import axios from "axios";
const urlUsers = "https://jsonplaceholder.typicode.com/photos"

export const getListPhoto = () => {
    return axios.get(urlUsers)
}
