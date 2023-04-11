import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import Context from '../context/Context'

const Footer = () => {
  const footerValues = ['Follow me at','Siga-me em', 'Suígueme en']
  const {language}=useContext(Context)
  return (
    <section className="footer">
        <div className="links-box">
        <h4 className='follow-me'>{footerValues[language]}</h4>
        <div className="footer-links">
          <NavLink to='https://www.linkedin.com/in/agust%C3%ADn-eli%C3%A1n-miola-649264211/' ><img src="/icons/linkedin.png" alt="linedin link" className='linkedin-link'/></NavLink>
          <NavLink to='https://github.com/amiola' ><img src="/icons/github.png" alt="github link" className='git-link'/></NavLink>
          <NavLink to='https://www.instagram.com/agustinmiola/' ><img src="/icons/instagram.png" alt="instagram link" className='instagram-link'/></NavLink>
        </div>
        </div>
        <div className="copyright">
            <h4>Agustín Miola | 2023</h4>
        </div>
    </section>
  )
}

export default Footer