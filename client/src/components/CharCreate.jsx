import React from 'react'
import { Route, Link } from 'react-router-dom';


const CharCreate = () => {
  return (
    <div>
      <Link className="home" to="/">Home</Link>
      <Link className="charSelect1" to='/CharSelect'>Character Selection</Link>
      <h2 className='CharCreate1'>Create your Character</h2>

    </div>
  )
}

export default CharCreate
