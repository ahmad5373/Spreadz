import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/';  // Local Base URL
const API_BASE_URL = 'https://spreadz-backend.vercel.app/';  // Live Base URL

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