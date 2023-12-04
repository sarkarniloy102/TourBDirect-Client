import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://tour-bd-irect-server.vercel.app'
})
const useAxiosSecure = () => {

    return axiosSecure;
};

export default useAxiosSecure;