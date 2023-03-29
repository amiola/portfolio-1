import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
    <h1 className="name-title-nav">agustín miola</h1>
        <h1 className="fe-title-nav">front-end web developer</h1>
        <ul>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/home'>Home</NavLink></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav