import React from 'react'
import Nav from '../navbar/Nav'
import {useForm} from 'react-hook-form'
import { contactData } from './assets/contact'
import './styles/Contact.css'

const Contact = () => {
  const {register, handleSubmit, formState:{errors}, watch, setFocus, resetField} = useForm();
  return (
    <>
    <Nav/>
    <section className="contact-container">
    <div className="contact-text">
    <h1 className='contact-title2'>contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quo quasi! Enim odit laboriosam ab officia labore rerum dolorem quidem.</p>
    </div>
    <form className='contact-form'>
      {contactData.map((field, i)=>{
        if(field.type==='textarea'){
          return(
            <div className={field.class} key={i}>
            <label htmlFor={field.name}>
              {/* spaces: */}
            &#160;&#160;
            <span className='spaces-1'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            <span className='spaces-2'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            <span className='spaces-3'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            <span className='spaces-4'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            <span className='spaces-5'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            <span className='spaces-6'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
            
              {field.name[0].toUpperCase()+field.name.substring(1)}:</label>
            <textarea rows='7' autoComplete="off"/>
          </div>
          )}
          else{
          return(
          <div className={field.class} key={i}>
          <label htmlFor={field.name}>
            {/* spaces: */}
          <span className='spaces-1'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-2'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-3'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-4'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-5'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-6'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          <span className='spaces-7'>&#160;&#160;&#160;&#160;&#160;&#160;&#160;</span>
          
            {field.name[0].toUpperCase()+field.name.substring(1)}:</label>
          <input type={field.type} autoComplete="off"/>
        </div>
      )}
        
})}
      <div className="submit-box"><input type='submit' value='Submit' /></div>
    </form>
    </section>
    </>
  )
}

export default Contact