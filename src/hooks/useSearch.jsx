import { useState, useEffect } from 'react';
import { fetchSearch } from '../API/API'

export const useSearch = query => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (query === '') return;
    fetchSearch(query).then(res => {
      setVideos([...res.results]);
    });
  }, [query]);

  return { videos };
};