export const API = 'https://swapi.dev/api/films';

const getAllMovie = async () => {
  const res = await fetch(API);
  const response = await res.json();
  const mx = response.results.map((movie) => ({
    id: Number(movie.url.split('/').filter(Boolean).pop()),
    episode_id: movie.episode_id,
    title: movie.title,
    description: movie.opening_crawl,
    releaseDate: movie.release_date,
    director: movie.director,
    producer: movie.producer,
  }));
  return mx;
};


export { getAllMovie };
