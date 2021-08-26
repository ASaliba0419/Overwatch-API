import React from 'react'
import './Footer.css'
import GitHub from '../components/img/GitHub.png'


const Footer = () => {

  return (
    <>

    <div className="footer">
        <h5>Andrew Saliba </h5>
        <a href="https://github.com/ASaliba0419" target='_blank'><img src={GitHub} alt="Git Hub"/></a>
        </div>

        </>
  )
}

export default Footer
