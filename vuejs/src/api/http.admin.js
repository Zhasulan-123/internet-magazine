import axios from 'axios';
import authAdmin from "@/api/auth.admin";
import router from '@/router';

/** Default config for axios instance */
const API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT || 'http://localhost:8083/';

let config = {
  baseURL: `${API_ENDPOINT}api/`,
  headers: {'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded'},
};

/** Creating the instance for axios */
const httpAdmin = axios.create(config);

/** Auth token interceptors */
const authInterceptor = config => {
  config.headers.Authorization = `Bearer ${authAdmin.getToken()}`;
  return config;
};


/** Adding the request interceptors */
httpAdmin.interceptors.request.use(authInterceptor);

/** Adding the response interceptors */
httpAdmin.interceptors.response.use(
  response => {
    /** TODO: Add any response interceptors */
    return response;
  },
  error => {
    if (error.response.status === 401){
      router.push({name: 'AdminLogin'})
    }
    /** TODO: Do something with response error */
    return Promise.reject(error);
  }
);

export default httpAdmin;