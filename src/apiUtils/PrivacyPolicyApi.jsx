import axios from 'axios';
import { API_BASE_URL } from '../config/config';

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
