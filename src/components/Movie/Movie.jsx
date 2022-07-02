import React from 'react'
import { Link } from "react-router-dom";

const Movie = ({id, title, poster_path, popularity}) => {

    const API_IMG="https://image.tmdb.org/t/p/w500";
    return (
        <div className="col">
            <Link to='' style={{ textDecoration: "none", color: "#ffff" }}>
                <div className="card text-center bg-secondary mb-3">
                    <img src={API_IMG+poster_path} className="card-img-top" alt={poster_path} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Popularidad: {popularity}</p>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default Movie