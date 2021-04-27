import axios from 'axios';

const api = axios.create({
  baseURL:`https://cpf2kwvsh5.execute-api.sa-east-1.amazonaws.com`,
  headers: {
    common: {        // can be common or any other method
      authorizationToken: 'allow'
    }
  }
});

export default api;