import axios from 'axios';

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com',
});

export const search = (q: string) =>
  twitterApi.get('/1.1/users/search.json/?q=' + q).then((res) => res.data);
