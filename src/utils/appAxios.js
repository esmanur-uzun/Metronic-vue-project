import axios from "axios";

export const appAxios = axios.create({
    baseURL : " https://apitest.nilvera.com/"
})

export default appAxios;