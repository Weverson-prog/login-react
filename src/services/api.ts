import axios from "axios"
export const api = axios.create({ baseURL: "http://conciliador.sandbox.pratico.tech" })

/*Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage()

        config.headers.Authorization= user?.token

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)*/
