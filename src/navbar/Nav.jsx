import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <nav>
        <div className="nav-titles">
        <h1 className="nav-name">agustín miola</h1>
        <h1 className="nav-fe">front-end web developer</h1>
        </div>
        <ul className={`nav-links ${isOpen? 'open':''}`}>
            <li><NavLink to='/home' className='nav-home'>home</NavLink></li>
            <li><NavLink to='/skills' className='nav-skills'>skills</NavLink></li>
            <li><NavLink to='/projects' className='nav-projects'>projects</NavLink></li>
            <li><NavLink to='/contact' className='nav-contact'>contact</NavLink></li>
        </ul>
        <div className="nav-hamburguer" onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
    </>
  )
}

export default Nav