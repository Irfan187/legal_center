import { useAppHelpers } from "@/composables/useAppHelpers";
import { useAuthStore } from "@/stores/auth-store";
import { useHelperStore } from "@/stores/helper-store";
import axios from "axios";

axios.defaults.withCredentials = true;

const apiClient = axios.create({
    baseURL: "/api/",
    headers: {
        // "Access-Control-Allow-Credentials": "True",
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/json",
        "Accept": "application/json",
        // "withCredentials": "true",
    },
});

apiClient.interceptors.request.use(function (config) {
    let token = decodeURIComponent(useAppHelpers().getCookie("XSRF-TOKEN"));
    if(token){
        config.headers["X-XSRF-TOKEN"] = token;
    }
    
    return config;
});

apiClient.interceptors.response.use(async (response) => {
    if (response.status == 419) {
        useAppHelpers().deleteAllCookies("XSRF-TOKEN");
        await apiClient
            .get("/sanctum/csrf-cookie")
            .then(async (csrfResponse) => {});
    }
    if (response.status == 404) {
        useHelperStore().change404State(true);
    }
    if (response.status == 401) {
        if (useAuthStore().isLoggedIn) {
            useAuthStore().processLogout();
        }
    }
    return response;
});

export default apiClient;
