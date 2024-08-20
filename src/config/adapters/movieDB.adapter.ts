import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "3e95f66f8c8b272c7d3b7d298ee0f351",
        language: "es"
    }
})