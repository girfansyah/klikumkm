import { useState, useEffect } from 'react';
import { getAllMovie } from '@/services/api';

const useMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const response = await getAllMovie();
      if (mounted) {
        setLoading(false);
        setMovies(response);
      }
    };
    fetchData();

    return () => {
      mounted = false;
    };
  }, []);
  return {
    loading,
    movies,
  };
};

export default useMovieList;
