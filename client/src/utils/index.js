import axios from "axios"
const API_URL = "http://localhost:8800/api-v1" 

export const API = axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export const apiRequest = async({url, token, data, method}) => {
    try {
        const results = await API(url, {
            method: method,
            data: data,
            headers: {
                "Content-Type": "application/jason", 
                Authorization: token ? `Bearer ${token}` : 
                "",
            },
        });
    } catch (error) { 
        const err = error.response.data;
        console.log(error)
        return { status: error.success, message: err.message
        };
    }
}