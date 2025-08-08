import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data.slice(0, 30);
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};