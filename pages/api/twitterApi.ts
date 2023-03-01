import axios from 'axios';

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com',
  headers: {
    Authorization: 'Bearer ' + process.env.ACCESS_TOKEN!,
  },
});

export const search = (q: string) =>
  twitterApi.get('/1.1/users/search.json/?q=' + q).then((res) => res.data);

export const getTrends = async (location: number) => {
  const res = await twitterApi.get('/1.1/trends/place.json?id=' + location);
  return res.data;
};
