import axios from 'axios';
import { API_BASE_URL } from '../config/config';

export const api = axios.create({
    baseURL: API_BASE_URL,
});

export const createVideo = async (data , token) => {
    return await api.post('videos/add-video', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const editVideo = async (id, data, token) => {
    return await api.put(`videos/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const deleteVideo = async (id, token) => {
    return await api.delete(`videos/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getallVideo = async () => {
    return await api.get(`videos/get-videos`);
};

export const getSingleVideo = async (id, token) => {
    return await api.get(`videos/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};