import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/OditCUiimgK9RZRp9W4ygFMKikLCshEP',
});

const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
