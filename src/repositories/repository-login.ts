// import type { AxiosInstance } from 'axios';
import axiosInstance from "@/apis/AxiosInstance.ts";
import {Account} from "@/types/models/account.ts";
import {API_URL} from "@/constant/api.ts";

export interface RepositoryLoginProps {
    login: (params: Account) => Promise<any>;
}

export const RepositoryLogin = ($axios: typeof axiosInstance): RepositoryLoginProps => ({
    login(params: Account): Promise<any> {
        return $axios.post(API_URL, params);
    },

});
