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
    <h1>Contact</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quo quasi! Enim odit laboriosam ab officia labore rerum dolorem quidem.</p>
    </div>
    <form className='contact-form'>
      {contactData.map((field, i)=>(
        <div className={field.class} key={i}>
          <label htmlFor={field.name}>{field.name[0].toUpperCase()+field.name.substring(1)}:</label>
          <input type={field.type} autoFocus autoComplete="off"/>
        </div>
      ))}
      <input type='submit'/>
    </form>
    </section>
    </>
  )
}

export default Contact