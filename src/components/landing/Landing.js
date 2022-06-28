import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1>¡LOG IN NOW!</h1>
        <Link className="btn btn-primary w-25 p-2 m-4" to='/login'>Login</Link>
    </div>
  )
}

export default Landing