import axios from 'axios';
import { API_BASE_URL } from '../config/config';
;

export const api = axios.create({
    baseURL: API_BASE_URL,
});


export const getallBlog = async () => {
    return await api.get(`blogs/get-blogs`);
};

export const getSingleBlog = async (id, token) => {
    return await api.get(`blogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};