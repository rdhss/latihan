import axios from "axios";
const urlPosting = "https://jsonplaceholder.typicode.com/posts"

export const getListPosting = () => {
    return axios.get(urlPosting)
}

export const getPostById = id => {
    return axios.get(urlPosting + `/${id}`)
}

export const getPostCommentById = id => {
    return axios.get(urlPosting + `/${id}/comments`)
}