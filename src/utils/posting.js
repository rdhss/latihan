import axios from "axios";
const urlPosting = "https://jsonplaceholder.typicode.com/posts"

export const getListPosting = () => {
    return axios.get(urlPosting)
}