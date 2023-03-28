import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className="home-container">
        <h1 className="name-title">agustín miola</h1>
        <h1 className="fe-title">front-end web developer</h1>
        <p className="about-me">Hi, my name is Agustín! I've been studying Front-End Web Development for the last 8 months.  Take a look of what I made at</p>
        <h2 className="projects-title">projects</h2>
        <div className="skills-container">
            <ul>
                <li>skills</li>
                <li>
                  &#160;&#160;&#160;&#160;&#160;&#160;&#160;
                  &#160;&#160;&#160;&#160;&#160;&#160;&#160;javascript</li>
                <li>html</li>
                <li>css</li>
                <li>react</li>
            </ul>
        </div>
        <h2 className="contact-title">contact</h2>
        <div className="social-links">
            <img src="../public/img/linkedin.png" alt="linedin link" />
            <img src="../public/img/github.png" alt="github link" />
        </div>
    </div>
    </>
  )
}

export default Home