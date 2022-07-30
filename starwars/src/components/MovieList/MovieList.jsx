import React from 'react';
import useMovieList from '@/hooks/useMovieList';
import MovieItem from './MovieItem';

const MovieList = () => {
  const { loading, movies } = useMovieList();
  return (
    <div className='container my-12'>
      <div className='flex flex-col  flex wrap mx-auto gap-4'>
        {loading ? (
          <p>Fetching...</p>
        ) : (
          movies.map((movie) => (
            <MovieItem
              key={movie.id}
              episode={movie.episode_id}
              director={movie.director}
              producer={movie.producer}
              title={movie.title}
              slug={movie.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
