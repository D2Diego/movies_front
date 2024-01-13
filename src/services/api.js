import axios from "axios";

export const api = axios.create({
  baseURL: "https://movies-api-c3ev.onrender.com",
});
