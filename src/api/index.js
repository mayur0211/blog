import axios from "axios";

const api = axios.create({

    baseURL: 'https://blogcontrols.fansclubworld.com/api',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const GetBlogList = (params) => api.post('/bloglist', params);
export const GetBlogDetail = (params) => api.post('/blogdetail');
export const GetCategory = () => api.post('/category');