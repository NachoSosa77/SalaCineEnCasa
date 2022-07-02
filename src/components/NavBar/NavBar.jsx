/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import "./NavBar.css";

const NavBar = () => {

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




  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/home">Cine en casa</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar