import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';


const axiousResuest = async ({ ...options }) => {
    const onSuucess = (res) => {
        return res.data;
    }
    const onError = err => {
        // console.log(err.request.response)
        throw err.response.data
    }

    return axios(options).then(onSuucess).catch(onError)
}

export default axiousResuest