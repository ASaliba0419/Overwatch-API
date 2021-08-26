import React from 'react'
import logo from '../components/img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="headerContainer">
    <header className='headerTitle'>
      <img id='headerImg' src={logo} alt='Overwatch'/>
    </header>
    </div>
    </>
  )
}

export default Header
