import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/';  // Local Base URL
const API_BASE_URL = 'https://spreadz-backend.vercel.app/';  // Live Base URL

export const api = axios.create({
    baseURL: API_BASE_URL,
});

export const createFaqs = async (data , token) => {
    return await api.post('faqs/create-faqs', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const editFaqs = async (id, data, token) => {
    return await api.put(`faqs/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const deleteFaqs = async (id, token) => {
    return await api.delete(`faqs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getallFaqs = async () => {
    return await api.get(`faqs/get-faqs`);
};

export const getSingleFaqs = async (id, token) => {
    return await api.get(`faqs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};