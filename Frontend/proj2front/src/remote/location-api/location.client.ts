import axios from "axios";

const locationClient = axios.create({
    baseURL: "http://localhost:8080/api/locations",
    headers: {
        "Content-Type": 'application/json',
    }
});

export default locationClient;