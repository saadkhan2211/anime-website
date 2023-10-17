import React from 'react'
import Wrapper from '../wrappers/NavBarWrapper'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Wrapper>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    <img src={logo} alt='animix' className='nav-logo img-fluid'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-4">
                            <Link className="btn nav-link nav-btn" aria-current="page" to='/login'>Login</Link>
                        </li>
                    </ul>
                    <form className="d-flex me-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn nav-btn" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </Wrapper>
  )
}

export default NavBar