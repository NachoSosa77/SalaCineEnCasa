/* eslint-disable no-template-curly-in-string */
import React from 'react'
import "./NavBar.css";

const NavBar = (props) => {


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid" >
          <a className="navbar-brand" href="/">
            <img className="logo" src="https://st3.depositphotos.com/8080374/13250/v/450/depositphotos_132509184-stock-illustration-popcorn-for-movie-theater.jpg" alt="cinelogo" />
          </a> 
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/login" className="nav-link">Login</a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">Sing Up</a>
            </li>  
          </ul>         
        </div>
      </nav>
    </div>
  )
}

export default NavBar