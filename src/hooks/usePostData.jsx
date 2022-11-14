import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const featchapi = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    return res.data
}



export const useGetPosts = () => {
    return useQuery(['posts'], featchapi)
}

export const useGetSinglePost = (id) => {
    return useQuery(['single-post'], async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return res.data
    })
}