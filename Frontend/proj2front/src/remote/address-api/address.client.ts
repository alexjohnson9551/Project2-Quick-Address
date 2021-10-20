import axios from "axios";

const addressClient = axios.create( {
  baseURL: "http://localhost:8080/address",
  headers: {
    "Content-Type": 'application/json',
  }, withCredentials: true
} );

export default addressClient;