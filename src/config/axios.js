import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://newsapi.org',
    headers: {
        'X-Api-Key': 'c99657a092e1495da7e29840c5efd8fc'
    }
});

export default axiosInstance;