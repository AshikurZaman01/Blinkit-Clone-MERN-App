import axios from 'axios';
import { baseURL, usersAPI } from './baseAli';

const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

Axios.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.getItem("AccessToken");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("RefreshToken");
            if (refreshToken) {
                try {
                    const newAccessToken = await refreshTokenAccess(refreshToken);
                    if (newAccessToken) {
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return Axios(originalRequest);
                    }
                } catch (err) {
                    console.error("Failed to refresh token:", err);
                }
            }

            localStorage.removeItem("AccessToken");
            localStorage.removeItem("RefreshToken");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

const refreshTokenAccess = async (refreshToken) => {
    try {
        const response = await axios({
            ...usersAPI.refreshToken,
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        });

        const accessToken = response?.data?.data?.accessToken;
        if (accessToken) {
            localStorage.setItem("AccessToken", accessToken);
        }

        return accessToken;
    } catch (error) {
        console.error("Error during token refresh:", error);
        throw error;
    }
};

export default Axios;
