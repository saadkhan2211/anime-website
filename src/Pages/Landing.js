import React from 'react'
import Wrapper from '../wrappers/LandingWrapper'

import logo from '../assets/logo.png';

import AnimeList from '../components/AnimeList';
import NewEpList from '../components/NewEpList';

const Landing = () => {
  return (
    <Wrapper>
      <div className='container text-white'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 w-75 my-5'>
            <img src={logo} alt='animix' className='nav-logo img-fluid mx-auto d-block'/>
            <form className='mx-3'>
              <input className='form-control' type='search' placeholder='Search Anime'/>
            </form>
          </div>
          <AnimeList />
          <NewEpList />
        </div>
      </div>
    </Wrapper>
  )
}

export default Landing