import React, { useState } from 'react'
import Wrapper from '../wrappers/LoginWrapper'

import logo from '../assets/logo.png'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Login = () => {

    const [values, setValues] = useState(initialState)

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    const showPassword = () => {
        var pass = document.getElementById('password')
        var icon = document.getElementById('eye-icon')
        if (pass.type === 'password') {
            pass.type = 'text'
            icon.className = "bi bi-eye-slash"
        } else {
            pass.type = 'password'
            icon.className = "bi bi-eye"
        }
    }


  return (
    <Wrapper>
      <div className='container'>
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <div className="card mx-auto">
                <img src={logo} className='img-fluid mx-auto mt-5 mb-3'/>
                <div className="card-body">
                  <h1 className="title">{values.isMember ? 'Login' : 'Register'}</h1>
                  <form className='mt-5'>
                    {!values.isMember && (
                      <div className='row justify-content-center align-content-center'>
                        <div className='col-6 mb-4'>
                          <input className='form-control' type='text' placeholder='Last Name'/>
                        </div>
                        <div className='col-6 mb-4'>
                          <input className='form-control' type='text' placeholder='Last Name'/>
                        </div>
                      </div>
                    )}
                    <div className='mb-4'>
                      <input className='form-control' type='text' placeholder='E-mail'/>
                    </div>
                    <div className='mb-4'>
                      <div className='input-group rounded-3'>
                        <input className='form-control border-end-0' placeholder='Password' type='password' id='password'/>
                        <button className='btn eye-btn' type='button' onClick={showPassword}><i id='eye-icon' class="bi bi-eye"></i></button>
                      </div>
                    </div>
                    <div className='mb-3 row justify-content-center'>
                      <button className='btn login-btn'>{values.isMember ? "Login" : " Register"}</button>
                    </div>
                  </form>
                  <div className="text-center text-white">
                    <span>OR</span>
                  </div>
                  <div className='row justify-content-center text-center'>
                    <div className='col-12'>
                      <button className='btn login-btn-1' type='button'>
                        <i class="bi bi-google"></i>
                      </button>
                      <button className='btn login-btn-1' type='button'>
                        <i class="bi bi-facebook"></i>
                      </button>
                    </div>
                    <p className='text-white'>{ values.isMember ? "Don't have an account ?" : "Alreaddy have an account ?"}
                      <a className='register-btn' type='button' onClick={toggleMember}>{ values.isMember ? "Register" : "Login"}</a>
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login