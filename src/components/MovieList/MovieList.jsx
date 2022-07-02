import React from 'react';
import Movie from '../Movie/Movie';


const MovieList = ({ movies, loading }) => {
    /* 
      if(loading||!movies){
        return<Loading/>
      } */

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">

            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    popularity={movie.popularity}
                />
            ))}

        </div>
    )
}

export default MovieList