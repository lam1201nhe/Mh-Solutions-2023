import axios from "axios"

//home-page/search
const request = axios.create({
    // baseUrl:
    baseURL: "https://api.mhsolution.vn/api/"
})

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response;
}

export const post = async (path, options = {}) => {
    const response = await request.post(path, options);
    return response?.data?.result;
}
export default request;