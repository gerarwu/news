import axios from '../config/axios';


export const getHeadLines = url => axios.get(`${url}`)