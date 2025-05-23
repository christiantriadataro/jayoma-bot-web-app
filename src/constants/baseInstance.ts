import axios from "axios";
import {BASE_URL} from "./env.ts";

const baseURL = `https://${BASE_URL}`

const baseInstance = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
    }
})

export default baseInstance;