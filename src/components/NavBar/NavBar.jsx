/* eslint-disable no-template-curly-in-string */
import React from 'react'
import "./NavBar.css";

const NavBar = (props) => {


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <img className="logo" src="https://st3.depositphotos.com/8080374/13250/v/450/depositphotos_132509184-stock-illustration-popcorn-for-movie-theater.jpg" alt="cinelogo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar