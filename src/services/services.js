import axios from '../config/axios';


export const getHeadLines = country => axios.get(`/v2/top-headlines?country=${country}`)