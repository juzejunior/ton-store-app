import axios from 'axios';

const counterApi = axios.create({
  baseURL:`https://api.countapi.xyz/hit/tonstore.com.br`
});

export default counterApi;