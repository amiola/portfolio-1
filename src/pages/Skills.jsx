import React, { useContext, useState } from 'react'
import './styles/Skills.css'
import { skillsData, skillsValues } from './assets/skills'
import Nav from '../navbar/Nav'
import Context from '../context/Context'

const Skills = () => {
  const {language} = useContext(Context);
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
        <h1 className="skills-title2">{skillsValues[language].skills}</h1>
        <div className="line line1"></div>
        {clicks===0 && <h2 className='skills-message'>{skillsValues[language].message}</h2>}
          {skills.map((skill,i)=>(
            <div key={i} className={skill.textClasses} id={skill.hidden}>
                <h3 className={skill.titleClasses}>{skill.title}</h3>
                <p>{skill.text[language]}</p>
            </div>
            ))}

        {skills.map((skill,i)=>{
            const image = `/icons/${skill.icon}`;
            const backImage = `/icons/back-${skill.icon}`;
            return (
              <div key={i} className={skill.imgClasses}>
            <img className='img1' id={i} src={image} alt={skill.name + ' logo'}
            onClick={show2}/>
            <img  className={skill.backImgClasses} src={backImage} />
            </div>
        )})}
        
        <div className="line line2"></div>
        <h3 className='other-skills'>{skillsValues[language].other}: SQL, git</h3>
    </section>
    </div>
    </>
  )
}

export default Skills