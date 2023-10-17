import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../wrappers/ListWrapper'

import jjk from '../assets/poster/jjk-season-2.jpg'
import aot from '../assets/poster/aot.jpg'
import demonSlayer from '../assets/poster/demon-slayer.jpg'
import bleach from '../assets/poster/bleach.jpg'
import blueLock from '../assets/poster/blue-lock.jpg'
import vinland from '../assets/poster/vinland.jpg'



const AnimeList = () => {
  return (
    <Wrapper>
        <div className='row justify-content-center align-content-center'>
            <div className='col-12 my-3'>
                <div className='row align-items-center list-head-bg mx-0'>
                    <div className='col-8'>
                        <h5 className='my-0'>Recently Updated</h5>
                    </div>
                    <div className='col-4 text-end'>
                        <Link className='link'>See all</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={jjk} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Jujutsu Kaisen <br/>Season 2</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={demonSlayer} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Demon Slayer<br/>Season 3</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                <img src={aot} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                <p className='text-center'>Attack on Titan<br/>Final Season</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={bleach} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Bleach Thousand-Year Blood War</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={vinland} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>212/212</p>
                    </div>
                    <p className='text-center'>Vinland Saga<br/>Season 2</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={blueLock} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Blue Lock<br/>Season 1</p>
                </div>
            </div>
        </div>

        <div className='row justify-content-center align-content-center'>
            <div className='col-12 my-3'>
            <div className='row align-items-center list-head-bg mx-0'>
                    <div className='col-8'>
                        <h5 className='my-0'>Popular Anime</h5>
                    </div>
                    <div className='col-4 text-end'>
                        <Link className='link'>See all</Link>
                    </div>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={jjk} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Jujutsu Kaisen <br/>Season 2</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={demonSlayer} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Demon Slayer<br/>Season 3</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                <img src={aot} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                <p className='text-center'>Attack on Titan<br/>Final Season</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={bleach} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Bleach Thousand-Year Blood War</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={vinland} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Vinland Saga<br/>Season 2</p>
                </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-4 mb-3'>
                <div className='card-body'>
                    <img src={blueLock} className='img-fluid rounded-3 mb-2'/>
                    <div className='card-box'>
                        <p>11/11</p>
                    </div>
                    <p className='text-center'>Blue Lock<br/>Season 1</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default AnimeList