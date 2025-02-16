import axios from "axios";
import { getCookie } from "@/utils/useCookie";

const apiClient = axios.create({
  baseURL: process.env.API_SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = getCookie("csrftoken");
    if (csrfToken) {
      config.headers["X-CSRFToken"] = csrfToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Request Error:", {
            message: error.message,
            config: error.config,
            response: error.response ? error.response.data : null, // 안전한 접근
            status: error.response ? error.response.status : "No Response", // 상태 코드 확인
        });
        return Promise.reject(error);
    }
);
  

export default apiClient;