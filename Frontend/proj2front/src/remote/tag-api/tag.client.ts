import axios from "axios";

const tagClient = axios.create({
    baseURL: "http://localhost:8080/api/tags",
    headers: {
        "Content-Type": 'application/json',
    }
});

export default tagClient;