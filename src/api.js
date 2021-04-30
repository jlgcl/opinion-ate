import axios from 'axios';

const client = axios.create({
  baseUrl: 'https://outside-in-dev-api.herokuapp.com/YOUR-API-KEY',
});

/// will fail E2E test since no HTTP request being made and not returning a Promise @ store
// const api = {
//   loadRestaurants() {},
// };

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
