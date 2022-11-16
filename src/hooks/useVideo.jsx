import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axiousResuest from "../utils/axiousResuest"


export const useGetAllVideos = () => {
    return useQuery(['videos'], () => axiousResuest({
        'url' : "/api/videos/",
        'method' : "get"
    }))
}


export const useAddVideo = () => {
    const queryClient = useQueryClient()
    /** session management */
    // const { data: session } = useSession();
    return useMutation(async (data) => await axiousResuest({
        url: `/api/videos/`,
        method: 'post',
        data: data,
        // headers: {
        //     Authorization: `Bearer ${session.accessToken}`
        // }
    }), {
        onSuccess: () => queryClient.invalidateQueries(['videos'])
    })
}