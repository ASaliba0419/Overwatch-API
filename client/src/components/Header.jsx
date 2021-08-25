import React from 'react'
import logo from '../components/img/logo.png'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="headerContainer">
    <header className='center'>
      <img src={logo} alt='Overwatch' height="200px"/>
    </header>
    </div>
    </>
  )
}

export default Header
