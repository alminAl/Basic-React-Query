import { useParams } from "react-router-dom"
import { useGetSinglePost } from "../hooks/usePostData"


const SinglePost = () => {
    const { id } = useParams()
    const { data } = useGetSinglePost(id)

    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    )
}

export default SinglePost