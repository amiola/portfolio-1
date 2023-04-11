import React, { useContext } from 'react'
import Nav from '../navbar/Nav'
import { NavLink } from 'react-router-dom'
import { projectsData, projectsValues } from './assets/projects'
import './styles/Projects.css'
import Context from '../context/Context'

const Projects = () => {
  const {language}=useContext(Context)

  return (
    <>
    <Nav/>
    <section className="projects-container">
      <h1 className="projects-title2">{projectsValues[language].projects}</h1>
      <div className="projects">
      {projectsData.map((p,i)=>{
        const image = `/img/${p.image}`
        return (
        <div className="project" key={p.name[language]}>
          <div className={i%2?"project-text box-right":"project-text box-left"}>
          <h3 className={i%2?"title title-right":"title title-left"}>{p.name[language]}</h3>
          <div className={i%2?"text-box-right":"text-box-left"}><p className={i%2?"text text-right":"text text-left"}>{p.text[language]}</p></div>
          </div>
          <div className="project-img"><NavLink to={p.link}><img src={image} alt={p.name[language] + 'image'}/></NavLink>
          <h1 className={p.comming? 'comming':'n-comming'}>{projectsValues[language].comming}</h1>
          </div>
        </div>
)})}
      </div>
      <div className="circles">
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </section>
    </>
  )
}

export default Projects