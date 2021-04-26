import axios from 'axios';

const api = axios.create({
  baseURL:`https://cpf2kwvsh5.execute-api.sa-east-1.amazonaws.com`
});

export default api;