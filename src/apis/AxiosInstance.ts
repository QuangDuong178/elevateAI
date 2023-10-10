import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
// const environment = process.env.REACT_APP_ENV;

const instance = axios.create({
    baseURL : apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    (config) => {
        // config the request before sending
        return config;
    },
    (error) => {
        // Handle exception
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        // Execute task after request response
        return response;
    },
    (error) => {
        // Handle Exception
        return Promise.reject(error);
    }
);



export default instance;