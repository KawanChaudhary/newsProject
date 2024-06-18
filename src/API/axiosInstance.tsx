import axios from 'axios';

export const api = axios.create({
    baseURL: `http:${process.env.API_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${process.env.API_KEY}`
    },
});