import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ slug, episode, director, producer, title }) => {
  return (
    <div className='flex justify-between flex-col md:flex-row items-start md:items-center p-8 md:p-16 gap-5 rounded bg-black w-full border'>
      <p className='text-4xl md:text-5xl font-bold'>{episode}.</p>
      <h3 className='text-lg font-bold hover:text-yellow'>
        <Link to={`/films/${slug}`}>{title}</Link>
      </h3>
      <p className='text-gray-400 break-words'>Producer : {producer}</p>
      <p className='text-gray-400'>Director : {director}</p>
      <Link to={`/films/${slug}`}>
        <button className='px-4 py-2 bg-grey hover:bg-black-1 rounded'>
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default MovieItem;
