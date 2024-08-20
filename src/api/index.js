import axios from "axios";

const api = axios.create({

    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const GetBlogListBySlug = (params) => api.post('bloglist', params);
export const GetBlogListByLimit = (params) => api.post('bloglist', params);
export const GetBlogListByAllParams = (params) => api.post('bloglist', params);
export const GetBlogDetail = (params) => api.post('blogdetail', params);
export const GetCategory = () => api.post('category');
export const GetTopCategory = () => api.post('topcategory');