import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getById } from "../../services/MoviesServices";
import NavBar from "../../components/NavBar/NavBar";
import "./Detail.css";

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const imgSrc = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/`;

  useEffect(() => {
    const req = async () => {
      try {
        const res = await getById(id);
        if (res) {
          setMovie(res);
        }
      } catch (e) {
        console.log(e);
      }
    };
    req();
  }, [id]);

  return (
    <>
      <NavBar />

      <div className="container mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="card-title">Title: {movie.title}.</div>
            <div>
              <i className="bi bi-star-fill"> {movie.vote_average}</i>
            </div>
          </div>
          <div className="card-body d-flex">
            <img
              src={imgSrc + movie.poster_path}
              className="img-thumbnail"
              alt={movie.poster_path}
            />
            <div className="mx-3">
              <h6>Descripción:</h6>
              <p className="mx-2">{movie.overview}</p>
              <h6>Fecha de lanzamiento:</h6>
              <p className="mx-2">{movie.release_date}</p>
              <h6>Lenguaje original:</h6>
              <p className="mx-2">{movie.original_language}</p>
              <h6>Popularidad:</h6>
              <p className="mx-2">{movie.popularity}</p>
            </div>
          </div>
          <div className="card-footer">
            <Link to="/" className="link">
              <div className="d-grid gap-2">
                <button className="btn btn">Volver al inicio</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
