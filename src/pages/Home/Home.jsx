import React from 'react'
import MovieListContainer from '../../components/MovieListContainer/MovieListContainer';
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <MovieListContainer/>
    </div>
  )
}

export default Home