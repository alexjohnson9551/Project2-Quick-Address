import axios from "axios";

const locationClient = axios.create( {
  baseURL: "http://localhost:8080/address",
  headers: {
    "Content-Type": 'application/json',
  }, withCredentials: true
} );

export default locationClient;