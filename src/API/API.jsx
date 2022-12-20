import axios from 'axios';

const API_KEY = '32592fc1c467ab313147df8555d6672d';

export const fetchSearch = async query => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return res.data;
};

export const fetchDetails = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};
export const fetchTrending = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&include_adult=false`
  );

  return res.data;
};

export const fetchCredits = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

export const fetchReviews = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};
