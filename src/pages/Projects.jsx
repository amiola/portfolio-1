import React from 'react'
import Nav from '../navbar/Nav'
import { projectsData } from './assets/projects'
import './styles/Projects.css'

const Projects = () => {

  return (
    <>
    <Nav/>
    <section className="projects-container">
      <h1 className="projects-title2">projects</h1>
      <div className="projects">
      {projectsData.map((p,i)=>{
        const image = `public/img/${p.image}`
        return (
        <div className="project" key={p.name}>
          <div className={i%2?"project-text box-right":"project-text box-left"}>
          <h3 className={i%2?"title-right":"title-left"}>{p.name[0].toUpperCase()+p.name.substring(1)}</h3>
          <div className={i%2?"text-box-right":"text-box-left"}><p className={i%2?"text-right":"text-left"}>{p.text}</p></div>
          </div>
          <img src={image} alt={p.name + 'image'} className='project-img'/>
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