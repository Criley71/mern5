import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h1>You are logged in</h1>
      <Link to="survey">
        <button className='btn'>
          Survey
        </button>
      </Link>
    </div>
  )
}

export default Home