import React from 'react'
import './styles/Skills.css'
import { skills } from './assets/skills'
import Nav from '../navbar/Nav'

const Skills = () => {
    
  return (
    <>
    <Nav/>
    <section className="skills-container">
        <h1 className="skills-title2">skills</h1>
        <div className="red-line red-line1"></div>
        
        {skills.map(skill=>(
            <div key={skill.name} className={skill.textClasses}>
                <h3 className={skill.titleClasses}>{skill.title}</h3>
                <p>{skill.text}</p>
            </div>
            ))}
        {skills.map(skill=>{
            const image = `public/icons/${skill.icon}`;
            return (
            <img key={skill.icon} src={image} alt={skill.name + ' logo'} className={skill.imgClasses}/>
        )})}
        
        <div className="red-line red-line2"></div>
        <h3 className='other-skills'>Other skills: SQL, git</h3>
    </section>
    </>
  )
}

export default Skills