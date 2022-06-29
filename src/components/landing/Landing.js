import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

const Landing = () => {
  return (
    <div>
      <div className='d-flex flex-column align-items-center landingCont'>
        <h1>¡Log in now!</h1>
        <Link className="btn btn-danger w-25 p-2 m-4" to='/login'>Login</Link>
      </div>
      <div>
        <p className='text-center'>Thanks for review my project</p>
        <p className='text-center fw-bold'>Isaac Vázquez - Full Stack Developer</p>
      </div>
    </div>
  )
}

export default Landing