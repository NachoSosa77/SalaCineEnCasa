import React, { useState } from 'react';
import { useEffect } from 'react';
import Movie from '../Movie/Movie';
import RatingStars from '../RatingStars/RatingStars';
import "./MovieListContainer.css";

const MovieListContainer = () => {

  const API_DISCOVER = "https://api.themoviedb.org/3/discover/movie?api_key=b892718013a1ebc19e52cd3a1b4b68c7&sort_by=popularity.desc";

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  let star = 5;

  useEffect(() => {
    fetch(API_DISCOVER)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);       
      })
      
  }, [])

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
    e.preventDefault()
    setQuery(e.target.value);
  }

  //Filtro Clasificación.

  function handleClick(e) {
    star = parseInt(e.target.id);
    for (let i =0; i<5; i++){
      if(i<star){
        document.getElementById((i+1)).classList.add("orange")
      }else{
        document.getElementById((i+1)).classList.remove("orange")   
      }
    }
    star = star*2;
    setMovies(movies.filter((movie) =>  movie.vote_average <= star))
    console.log(star);
    console.log(movies);
  }

  
  return (

    <div>
      <form className="d-flex justify-content-center m-3" autoComplete="off" onSubmit={searchMovie}>
        <input className="form-control me-2"
          type="search"
          placeholder="Buscar..."
          aria-label="Search"
          name="query"
          value={query} onChange={changeHandler}
        />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>

      <div>
      <RatingStars handleClick={handleClick} />
      </div>

      {movies.length > 0 ?(
        <div className="container d-flex justify-content-center">
          <div className="row">
            {movies.map((movie) =>
              <Movie key={movie.id} {...movie} />)}
          </div>
        </div>
       ) : (
        <div className="alert alert-danger text-center" role="alert">
          <h2>Sorry!! No movies found.</h2>
        </div>
      )} 

    </div>
  )
}

export default MovieListContainer