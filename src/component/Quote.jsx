import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"


const featchapi = async () => {
    const res = await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    return res.data
}


const Quote = () => {
    const { data: quoteData } = useQuery(['quote'], featchapi)
    // const [data, setData] = useState(null)

    // const featchdata = useCallback(async () => {
    //     try {
    //         const res = await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
    //         setData(res.data)
    //     } catch (error) {

    //     }
    // }, [])

    // useEffect(() => {
    //     featchdata()
    // }, [featchdata])
    // console.log(quoteData)


    return (
        <>
            <div>Quote</div>
            <p>{quoteData.message}</p>
        </>
    )
}

export default Quote