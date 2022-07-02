import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import "./MovieListContainer.css";

const MovieListContainer = () => {

  const API_DISCOVER = "https://api.themoviedb.org/3/discover/movie?api_key=b892718013a1ebc19e52cd3a1b4b68c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

  const [movies, setMovies] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(API_DISCOVER)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })

  }, [])

  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=b892718013a1ebc19e52cd3a1b4b68c7&language=en-US&page=1&include_adult=false'

  const [query, setQuery] = useState('');


  const searchMovie = async (e) => {
    e.preventDefault();
    console.log('Buscando...')
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b892718013a1ebc19e52cd3a1b4b68c7&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }



  return (
    <div className="container-fluid">
      
        <form className="d-flex mb-3" role="search" onSubmit={searchMovie}>
          <input className="form-control me-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
            name="query"
            value={query} onChange={changeHandler}
          />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
     
      <MovieList movies={movies} />

    </div>
  )
}

export default MovieListContainer