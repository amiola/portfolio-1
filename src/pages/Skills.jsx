import React, { useState } from 'react'
import './styles/Skills.css'
import { skillsData } from './assets/skills'
import Nav from '../navbar/Nav'

const Skills = () => {

  const [skills, setSkills] = useState(skillsData);
  const [clicks, setClicks] = useState(0);

    const show =(e)=>{
      setSkills(skills.map((s,i)=>{
          if(i== e.target.id) {
            return {...s, hidden: 'show'}
          }
          else {
            return s
          }
        }))
    }

    const clear = ()=>{
      setSkills(skillsData);
    }

    const show2 = (e)=>{
      if(clicks===0){
        show(e);
        setClicks(1);
      } else{
        clear();
        setClicks(0);
      }
    }

  return (
    <>
    <Nav/>
    <div className="whole-skills-container">
    <section className="skills-container">
        <h1 className="skills-title2">skills</h1>
        <div className="red-line red-line1"></div>
        
          {skills.map((skill,i)=>(
            <div key={i} className={skill.textClasses} id={skill.hidden}>
                <h3 className={skill.titleClasses}>{skill.title}</h3>
                <p>{skill.text}</p>
            </div>
            ))}

        {skills.map((skill,i)=>{
            const image = `public/icons/${skill.icon}`;
            return (
            <img key={i} id={i} src={image} alt={skill.name + ' logo'} className={skill.imgClasses}
            onClick={show2}/>
            
        )})}
        
        <div className="red-line red-line2"></div>
        <h3 className='other-skills'>Other skills: SQL, git</h3>
    </section>
    </div>
    </>
  )
}

export default Skills