import React from 'react';
import './navbar.css'
import logo from '../Assests/Logo.png'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src={logo} alt="" className="logo"/>
          </a>


          <div class="navcenter">
            <span className='H'>Home</span>
            <span className='M'>Movies</span>
            <span className='T'>Theaters</span>
          </div>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
</nav>
    </div>
  );
}
