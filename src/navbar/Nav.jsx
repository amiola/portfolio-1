import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="nav-titles">
        <h1 className="nav-name">agustín miola</h1>
        <h1 className="nav-fe">front-end web developer</h1>
        </div>
        <ul className='nav-links'>
            <li><NavLink to='/home'>home</NavLink></li>
            <li><NavLink to='/skills' className='nav-skills'>skills</NavLink></li>
            <li><NavLink to='/projects' className='nav-projects'>projects</NavLink></li>
            <li><NavLink to='/contact' className='nav-contact'>contact</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav