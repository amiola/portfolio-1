import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
    <section className="home-container">
        <h1 className="name-title">agustín miola</h1>
        <h1 className="fe-title">front-end web developer</h1>
        <p className="about-me">Hi, my name is Agustín! I've been studying Front-End Web Development for the last 8 months.  Take a look of what I made at</p>
        <div className="projects-box"><NavLink to='/projects' className="projects-title">projects</NavLink></div>
        <div className="skills-box">
            <ul>
                <li><NavLink to='/skills' className='skills-title'>skills</NavLink></li>
                <li>
                  &#160;&#160;&#160;&#160;&#160;&#160;&#160;
                  &#160;&#160;&#160;&#160;&#160;&#160;&#160;javascript</li>
                <li>html</li>
                <li>css</li>
                <li>react</li>
            </ul>
        </div>
        <div className="contact-box"><NavLink to='/contact' className="contact-title">contact</NavLink></div>
        <div className="social-links">
          <NavLink to='https://www.linkedin.com/in/agust%C3%ADn-eli%C3%A1n-miola-649264211/' ><img src="../public/icons/linkedin.png" alt="linedin link" className='linkedin-link'/></NavLink>
            <NavLink to='https://github.com/amiola' ><img src="../public/icons/github.png" alt="github link" className='git-link'/></NavLink>
        </div>
    </section>
    </>
  )
}

export default Home