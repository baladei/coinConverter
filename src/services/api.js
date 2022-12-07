import axios from "axios";

const api = axios.create ({
    baseURL: "http://economia.awesomeapi.com.br/json/last/"
});

export default api;