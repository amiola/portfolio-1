import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Languages from '../languages/Languages'
import Context from '../context/Context'
import { homeValues } from './homeValues'

const Home = () => {
  const {language} =useContext(Context)
  return (
    <>
    <div className="whole-home-container">
    <section className="home-container">
        <h1 className="name-title">agustín miola</h1>
        <h1 className="fe-title">front-end web developer</h1>
        <p className="about-me">{homeValues[language].about} <strong>&darr;</strong></p>
        <div className="projects-box"><NavLink to='/projects' className="projects-title">{homeValues[language].projects}</NavLink></div>
        <div className="skills-box">
            <ul>
                <li><NavLink to='/skills' className='skills-title'>{homeValues[language].skills}</NavLink></li>
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
        <div className="contact-box"><NavLink to='/contact' className="contact-title">{homeValues[language].contact}</NavLink></div>
        <div className="social-links">
          <NavLink to='https://www.linkedin.com/in/agustinelianmiola/' ><img src="/icons/linkedin.png" alt="linedin link" className='linkedin-link'/></NavLink>
            <NavLink to='https://github.com/amiola' ><img src="/icons/github.png" alt="github link" className='git-link'/></NavLink>
        </div>
    </section>
    <Languages/>
    </div>
    </>
  )
}

export default Home