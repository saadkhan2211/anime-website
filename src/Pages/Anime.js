import React from 'react'
import Wrapper from '../wrappers/AnimeWrapper'

import jjkCover from '../assets/cover/1.jpg'
import jjk from '../assets/poster/jjk-season-2.jpg'

const Anime = () => {
  return (
    <Wrapper>
      <img src={jjkCover} className='img-fluid bg-img' />
      <div className='img-overlay'>
        <div className='container'>
          <div className='card my-5'>
            <img src={jjk} className='card-img-top' />
            <div className='card-body'>
              <h1 className='title'>Jujutsu Kaisen Season 2</h1>
              <div className='mt-3'>
                <p className='text'>Author:&nbsp;<span className='text-blue'>Gege Akutami</span></p>
                <p className='text'>Animators:&nbsp;<span className='text-blue'>Mappa Studio</span></p>
              </div>
              <div className='d-flex'>
                <p className='sub'>SUB</p>
                <p className='dub'>DUB</p>
              </div>
              <div class="d-flex align-content-center mt-5">
                <div class="small-ratings">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-half"></i>
                </div>
                <h4 className='rating-text'>9.5/10</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Anime