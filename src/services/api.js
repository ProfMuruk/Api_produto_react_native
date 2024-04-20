// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://172.20.10.2:8080/api/v1", // Substitua 192.168.1.5 pelo seu IP local
  timeout: 1000,
});

const algo = require('axios');

export const fetchProducts = async () => {
  try {
    const response = await api.get("/produtos"); // Rota da sua API
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos: tela api", error);
    throw error;
  }
};

export const postProduct = async (product) => {
  try {
    const response = await api.post("/produto", product); // Rota da sua API
    return response.data;
  } catch (error) {
    console.error("Erro ao postar produto: tela api", error);
    throw error;
  }
};

export default api;
