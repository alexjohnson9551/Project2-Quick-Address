import axios from "axios";

const userClient = axios.create({
    baseURL: "http://localhost:8080/api/users",
    headers: {
        "Content-Type": 'application/json',
    }
});

export default userClient;