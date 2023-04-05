import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="whole-home-container">
    <section className="home-container">
        <h1 className="name-title">agustín miola</h1>
        <h1 className="fe-title">front-end web developer</h1>
        <p className="about-me">Hi, my name is Agustín! I've been studying Front-End Web Development for the last 8 months.  Take a look of what I made at <strong>&darr;</strong></p>
        <div className="projects-box"><NavLink to='/projects' className="projects-title">projects</NavLink></div>
        <div className="skills-box">
            <ul>
                <li><NavLink to='/skills' className='skills-title'>skills</NavLink></li>
                <li>
                  {/* spaces: */}
                  <span className='spaces1'>&#160;&#160;&#160;&#160;</span>
                  <span className='spaces2'>&#160;&#160;&#160;&#160;</span>
                  &#160;&#160;&#160;&#160;&#160;&#160;javascript</li>
                <li>html</li>
                <li>css</li>
                <li>react</li>
            </ul>
        </div>
        <div className="contact-box"><NavLink to='/contact' className="contact-title">contact</NavLink></div>
        <div className="social-links">
          <NavLink to='https://www.linkedin.com/in/agust%C3%ADn-eli%C3%A1n-miola-649264211/' ><img src="/icons/linkedin.png" alt="linedin link" className='linkedin-link'/></NavLink>
            <NavLink to='https://github.com/amiola' ><img src="/icons/github.png" alt="github link" className='git-link'/></NavLink>
        </div>
    </section>
    </div>
    </>
  )
}

export default Home