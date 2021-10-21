import axios from "axios";

const userClient = axios.create( {
  baseURL: "http://localhost:8080/user",
  headers: {
    "Content-Type": 'application/json',
  }, withCredentials: true
} );

export default userClient;