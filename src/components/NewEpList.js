import React from 'react'
import Wrapper from '../wrappers/NewEpListWrapper'

import jjk from '../assets/poster/jjk-season-2.jpg'
import mha from '../assets/poster/mha.jpg'
import bleach from '../assets/poster/bleach.jpg'

const NewEpList = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='row justify-content-center align-content-center'>
                <div className='col-md-6'>
                    <h5 className='card-head'>Upcoming Episodes</h5>
                    <div className='list-card'>
                        <div className='card'>
                            <img src={jjk} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>Jujutsu Kaisen Season 2</p>
                                <p className='text'>Episode:&nbsp;<span className='ep-title'>Shibuya Incident</span></p>
                                <p className='box-text-green'>SUB</p>
                                <p className='clock-text'><i class="bi bi-clock"></i> 6d 12h 52m</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={mha} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>My Hero Academia Season 6</p>
                                <p className='text'>Episode:&nbsp;<span className='ep-title'>Deku vs. Class A</span></p>
                                <p className='box-text-red'>DUB</p>
                                <p className='clock-text'><i class="bi bi-clock"></i> 6d 12h 52m</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={bleach} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>Bleach Thousand-Year Blood War</p>
                                <p className='text'>Episode:&nbsp;<span className='ep-title'>The Headless Star</span></p>
                                <p className='box-text-green'>SUB</p>
                                <p className='clock-text'><i class="bi bi-clock"></i> 6d 12h 52m</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6'>
                    <h5 className='card-head'>Now Trending</h5>
                    <div className='trending-card'>
                        <div className='card align-items-center'>
                            <h4 className='text-white me-4'><small>#</small>1</h4>
                            <img src={jjk} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>Jujutsu Kaisen Season 2</p>
                                <p className='views'><i className='bi bi-eye'></i>&nbsp;2,234,515</p>
                                <div class="d-flex align-content-center">
                                    <div class="small-ratings">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                    </div>
                                    <h4 className='rating-text'>9.5/10</h4>
                                </div>
                                <button className='btn watch-btn'>Watch</button>
                            </div>
                        </div>
                        <div className='card align-items-center'>
                            <h4 className='text-white me-4'><small>#</small>2</h4>
                            <img src={bleach} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>Bleach Thousand-Year Blood War</p>
                                <p className='views'><i className='bi bi-eye'></i>&nbsp;1,264,010</p>
                                <div class="d-flex align-content-center">
                                    <div class="small-ratings">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <h4 className='rating-text'>9/10</h4>
                                </div>
                                <button className='btn watch-btn'>Watch</button>
                            </div>
                        </div>
                        <div className='card align-items-center'>
                            <h4 className='text-white me-4'><small>#</small>3</h4>
                            <img src={mha} className='card-img-top'/>
                            <div className='card-body'>
                                <p className='title'>My Hero Academia Season 6</p>
                                <p className='views'><i className='bi bi-eye'></i>&nbsp;874,592</p>
                                <div class="d-flex align-content-center">
                                    <div class="small-ratings">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-half"></i>
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <h4 className='rating-text'>8.5/10</h4>
                                </div>
                                <button className='btn watch-btn'>Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default NewEpList