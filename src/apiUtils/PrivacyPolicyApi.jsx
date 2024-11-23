import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/';  // Local Base URL
const API_BASE_URL = 'https://spreadz-backend.vercel.app/';  // Live Base URL

export const api = axios.create({
    baseURL: API_BASE_URL,
});

export const createPolicy = async (type, data) => {
    console.log("data =>", data);
    // console.log("type =>", type);
    return await api.post(`policies/${type}`, data);
};

export const getPolicy = async (type) => {
    console.log("type =>", type);
    return await api.get(`policies/${type}`);
};
