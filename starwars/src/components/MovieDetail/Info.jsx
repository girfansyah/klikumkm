import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({ movie, planets, species, starships, vehicles, characters }) => {
  return (
    <div>
      <div className='py-8 text-lg text-gray-200 hover:text-yellow inline-flex'>
        <Link to='/'>&larr; Back to List</Link>
      </div>
      <div className='flex flex-col px-4 my-4 border-b-2 border-dashed border-gray-400'>
        <div className='flex items-center gap-8'>
          <p className='text-5xl font-bold'>EP. {movie.episode_id}</p>
          <h1 className=' text-white font-bold text-3xl'>{movie.title}</h1>
        </div>

        <div className='mt-8 mb-4'>
          <h3 className='text-gray-400 text-2xl mb-1 font-semibold'>
            Description :
          </h3>
          <p>{movie.opening_crawl}</p>
        </div>
        <div className='flex my-4 flex-col md:flex-row justify-between'>
          <p className='text-gray-400'>
            Director :
            <span className='ml-2 text-white font-semibold'>
              {movie.director}
            </span>
          </p>
          <p className='text-gray-400'>
            Producer :
            <span className='ml-2 text-white font-semibold'>
              {movie.producer}
            </span>
          </p>
        </div>
        <div className='mb-4 inline-flex items-center gap-4'>
          <h3 className='text-gray-400 font-semibold text-lg'>
            Realese Date :
          </h3>
          <p className='font-bold'>{movie.release_date}</p>
        </div>
      </div>
      <div className=' p-4 border-b-2 border-dashed border-gray-400'>
        <h3 className='text-gray-400 text-2xl mb-2 font-semibold'>
          Character :{' '}
        </h3>
        <ul className='grid grid-cols-2 md:grid-cols-3'>
          {characters.map((character, i) => (
            <li className='list-disc ml-4 my-1' key={i}>
              <div>
                <h4>{character.name}</h4>
                <div className='capitalize'>
                  <p>Birth : {character.birth_year}</p>
                  <p>Gender : {character.gender}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4 border-b-2 border-dashed border-gray-400'>
        <h3 className='text-gray-400 text-2xl mb-2 font-semibold'>Planet : </h3>
        <ul className='flex md:flex-row flex-col justify-between'>
          {planets.map((planets, i) => (
            <li className='list-disc my-1 ml-4' key={i}>
              <div>
                <h4 className='font-semibold'>{planets.name}</h4>
                <div>
                  <p className='capitalize'>
                    Gravity : <span>{planets.gravity}</span>
                  </p>
                  <p className='capitalize'>
                    Diameter : <span>{planets.diameter}</span>
                  </p>
                  <p className='capitalize'>
                    Orbital Period : <span>{planets.orbital_period}</span>
                  </p>
                  <p className='capitalize'>
                    Population : <span>{planets.population}</span>
                  </p>
                  <p className='capitalize'>
                    Terrain : <span>{planets.terrain}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='p-4 border-b-2 border-dashed border-gray-400'>
        <h3 className='text-gray-400 text-2xl mb-2 font-semibold'>Species</h3>
        <ul className='grid grid-cols-1 md:grid-cols-3'>
          {species.map((species, i) => (
            <li className='list-disc ml-4 my-1' key={i}>
              <div>
                <h4 className='font-semibold'>{species.name}</h4>
                <div className='capitalize'>
                  <p>classification : {species.classification}</p>
                  <p>designation : {species.designation}</p>
                  <p>language : {species.language}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4 border-b-2 border-dashed border-gray-400'>
        <h3 className='text-gray-400 text-2xl mb-2 font-semibold capitalize'>
          starships
        </h3>
        <ul className='grid grid-cols-1 md:grid-cols-3'>
          {starships.map((starships, i) => (
            <li className='list-disc ml-4 my-1' key={i}>
              <div>
                <h4 className='font-semibold'>{starships.name}</h4>
                <div className='capitalize'>
                  <p>model : {starships.model}</p>
                  <p>starship class : {starships.starship_class}</p>
                  <p>manufacturer : {starships.manufacturer}</p>
                  <p>Speed : {starships.max_atmosphering_speed}</p>
                  <p>capacity : {starships.cargo_capacity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-4 border-b-2 border-dashed border-gray-400'>
        <h3 className='text-gray-400 text-2xl mb-2 font-semibold capitalize'>
          vehicles
        </h3>
        <ul className='grid grid-cols-1 md:grid-cols-3'>
          {vehicles.map((vehicles, i) => (
            <li className='list-disc ml-4 my-1' key={i}>
              <div>
                <h4 className='font-semibold'>{vehicles.name}</h4>
                <div className='capitalize'>
                  <p>model : {vehicles.model}</p>
                  <p>starship class : {vehicles.starship_class}</p>
                  <p>manufacturer : {vehicles.manufacturer}</p>
                  <p>Speed : {vehicles.max_atmosphering_speed}</p>
                  <p>capacity : {vehicles.cargo_capacity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
