import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c4b10d3fafebe068a10064029b6d464a',
        language: 'es-ES'
    }
});

export default movieDB;