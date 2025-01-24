import axios from 'axios';

export const commonAPI = async (method, url, data = {}) => {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: data,
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
