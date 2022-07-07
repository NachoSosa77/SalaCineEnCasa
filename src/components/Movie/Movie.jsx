import React from "react";
import {Link} from "react-router-dom";
import "./Movie.css";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const Movie = ({
  id,
  title,
  poster_path,
  popularity,
  vote_average,
  release_date,
  overview,
}) => {
  
  return (
    <div className="col">
      <Link to={'/movie/' + id}>
      <div className="card mb-3" style={{ width: "15rem" }}>
        <img
          src={API_IMG + poster_path}
          className="card-img-top"
          alt={poster_path}
        />
      </div>
      </Link>
    </div>
  );
};

export default Movie;
