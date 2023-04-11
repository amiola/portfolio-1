import React, { useContext, useState } from 'react'
import './Languages.css'
import Context from '../context/Context';

const Languages = ({setIsOpen}) => {
    const languageValues= ['Select language', 'Selecionar língua', 'Seleccionar idioma']
    const [open, setOpen]=useState(false);
    const {language, setLanguage} = useContext(Context)
    const languageIcon = `/icons/lang/${language}.png`
    const change = (lan)=>{
        setLanguage(lan);
        setOpen(false);
        setIsOpen(false);
    }
  return (
    <>
    <section className="languages">
        <img src={languageIcon} alt="english" onClick={()=>setOpen(!open)} className='cur-language'/>
        <div className="languages-toggle" id={open?'open':'closed'}>
        <h3>{languageValues[language]}:</h3>
        <div className="flags">
        <img src='/icons/lang/0.png' alt="english" onClick={()=>change(0)}/>
        <img src='/icons/lang/1.png' alt="português" onClick={()=>change(1)}/>
        <img src='/icons/lang/2.png' alt="español" onClick={()=>change(2)}/>
        </div>
        </div>
    </section>
    </>
  )
}

export default Languages