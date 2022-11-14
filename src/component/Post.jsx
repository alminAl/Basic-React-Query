import { useGetPosts } from "../hooks/usePostData"


const Post = () => {
    const { data } = useGetPosts()

    return (
        <div>
            {
                data.map(i => <div key={i.id}>
                    <h3>{i.title}</h3>
                    <p>{i.body}</p>
                </div>)
            }

        </div>
    )
}

export default Post