import React, { useContext, useState } from 'react'
import './Languages.css'
import Context from '../context/Context';

const Languages = ({setIsOpen}) => {
    const languageValues= ['Select language', 'Selecionar língua', 'Seleccionar idioma']
    const [open, setOpen]=useState(false);
    const {language, setLanguage} = useContext(Context)
    // const languageIcon = `/icons/lang/${language}.png`
    const change = (lan)=>{
        setLanguage(lan);
        setOpen(false);
        setIsOpen(false);
    }
  return (
    <>
    <section className="languages">
        <img src='/icons/lang/world.png' alt="english" onClick={()=>setOpen(!open)} className='world'/>
        <div className="languages-toggle" id={open?'open':'closed'}>
        <h3>{languageValues[language]}:</h3>
        <div className="flags">
        <img src='/icons/lang/0.png' alt="english" onClick={()=>change(0)}
        className={language===0?'lang-active':''}/>
        <img src='/icons/lang/1.png' alt="português" onClick={()=>change(1)}
        className={language===1?'lang-active':''}/>
        <img src='/icons/lang/2.png' alt="español" onClick={()=>change(2)}
        className={language===2?'lang-active':''}/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Languages