import axios from 'axios';
import { API_BASE_URL } from '../config/config';

export const api = axios.create({
    baseURL: API_BASE_URL,
});

export const createContact = async (data ) => {
    return await api.post('contact-us/add-message', data);
};

export const editMessage = async (id, data, token) => {
    return await api.put(`contact-us/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const deleteMessage = async (id, token) => {
    return await api.delete(`contact-us/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getallMessage = async (token) => {
    return await api.get(`contact-us/get-message`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getSingleMessage = async (id, token) => {
    return await api.get(`contact-us/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};


export const SubscribeNewsletter = async (data) => {
    return await api.post('contact-us/subscribe-newsletter', data);
};

export const getallNewsletter = async (token) => {
    return await api.get(`contact-us/get-newsletter`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};