import { useState, useEffect } from 'react';
import { fetchTrending } from '../API/API';

export const useStartPage = () => {
  const [trendList, setTrendList] = useState(null);

  useEffect(() => {
    fetchTrending().then(res => {
      setTrendList([...res.results]);
    });
  }, []);

  return { trendList };
};
