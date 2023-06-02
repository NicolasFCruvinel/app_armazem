import axios from "axios";

const api = axios.create({ 
    baseURL: 'https://backend-app-gilt.vercel.app/',
});

export default api;