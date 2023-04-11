import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import Languages from '../languages/Languages'
import { navValues } from './navValues'
import Context from '../context/Context'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {language} = useContext(Context)
  return (
    <>
    <nav>
        <div className="nav-titles">
        <h1 className="nav-name">agustín miola</h1>
        <h1 className="nav-fe">front-end web developer</h1>
        </div>
        <ul className={`nav-links ${isOpen? 'open':''}`}>
            <li><NavLink to='/home' className='nav-home'>{navValues[language].home}</NavLink></li>
            <li><NavLink to='/skills' className='nav-skills'>{navValues[language].skills}</NavLink></li>
            <li><NavLink to='/projects' className='nav-projects'>{navValues[language].projects}</NavLink></li>
            <li><NavLink to='/contact' className='nav-contact'>{navValues[language].contact}</NavLink></li>
            <Languages/>
        </ul>
        
        <div className={`nav-hamburguer ${isOpen? 'open':''}`} onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </nav>
    </>
  )
}

export default Nav