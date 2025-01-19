
import axios from 'axios';
import { baseURL } from './baseAli';

const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true
})

export default Axios;