import axios, {AxiosInstance} from "axios";


const API : AxiosInstance = axios.create({
    baseURL: " http://localhost:3005"
});

export default API