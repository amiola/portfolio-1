import React from 'react'
import './styles/Skills.css'

const Skills = () => {
  return (
    <>
    <section className="skills-container">
        <h1 className="skills-title2">skills</h1>
        <div className="red-line red-line1"></div>
        
            <div className="js-text-box">
                <h3>JavaScript</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur modi, quod iusto sint iste numquam quas animi pariatur. Necessitatibus.</p>
            </div>
            <img src="public\icons\js.png" alt="javascript logo" className='js-img'/>
        
        
            <div className="html-text-box">
                <h3 className='right'>HTML</h3>
                <div  className='jus-right'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur modi, quod iusto sint iste numquam quas animi pariatur. Necessitatibus.</p></div> 
            </div>
            <img src="public\icons\html.png" alt="html logo" className='html-img big'/>
        
            <div className="css-text-box">
                <h3>CSS</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur modi, quod iusto sint iste numquam quas animi pariatur. Necessitatibus.</p>
            </div>
            <img src="public\icons\css.png" alt="css logo" className='css-img big'/>
        
            <div className="react-text-box">
                <h3 className='right'>React</h3>
                <div className='jus-right'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequuntur modi, quod iusto sint iste numquam quas animi pariatur. Necessitatibus.</p></div>
            </div>
            <img src="public\icons\react.png" alt="react logo" className='react-img big'/>
        
        <div className="red-line red-line2"></div>
        <h3 className='other-skills'>Other skills: SQL, git</h3>
    </section>
    </>
  )
}

export default Skills