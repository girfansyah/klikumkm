import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '@/services/api';
import Info from './Info';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [characters, setCharacters] = useState([]);

  const getMovieDetail = async (filmID) => {
    try {
      const response = await fetch(`${API}/${filmID}`);
      const resJson = await response.json();
      const Character = await Promise.all(
        resJson.characters.map((url) => fetch(url).then((res) => res.json()))
      );
      const Planets = await Promise.all(
        resJson.planets.map((url) => fetch(url).then((res) => res.json()))
      );
      const Species = await Promise.all(
        resJson.species.map((url) => fetch(url).then((res) => res.json()))
      );
      const Starships = await Promise.all(
        resJson.starships.map((url) => fetch(url).then((res) => res.json()))
      );
      const Vehicles = await Promise.all(
        resJson.vehicles.map((url) => fetch(url).then((res) => res.json()))
      );
      setMovie(resJson);
      setCharacters(Character);
      setPlanets(Planets);
      setSpecies(Species);
      setStarships(Starships);
      setVehicles(Vehicles);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetail(id);
  }, [id]);
  console.log(vehicles);
  return (
    <div className='container my-8'>
      {loading ? (
        <p>Fetching...</p>
      ) : (
        <>
          <Info
            movie={movie}
            planets={planets}
            characters={characters}
            species={species}
            starships={starships}
            vehicles={vehicles}
          />
        </>
      )}
    </div>
  );
}

export default MovieDetail;
