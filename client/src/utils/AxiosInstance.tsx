import axios from 'axios'
import { EnvLoader } from './EnvLoader'

const URL : string = EnvLoader("VITE_BACKEND_URL","string")

export const AxiosInstance = axios.create({
    baseURL : URL,
    withCredentials:true
})

