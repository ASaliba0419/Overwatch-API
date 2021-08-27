import React from 'react'
import logo from '../components/img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="headerContainer">
    <header className='headerTitle'>
      <a href="https://playoverwatch.com/en-us/" target="_blank"><img id='headerImg' src={logo} alt='Overwatch'/></a>
    </header>
    </div>
    </>
  )
}

export default Header
