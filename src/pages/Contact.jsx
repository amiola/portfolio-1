import React from 'react'
import Nav from '../navbar/Nav'
import {useForm} from 'react-hook-form'
import { contactData } from './assets/contact'
import './styles/Contact.css'
import Footer from '../footer/Footer'

const Contact = () => {
  const {register, handleSubmit, formState:{errors}, watch, setFocus, resetField} = useForm();

  const obtenerValores = (data)=>{
    console.table(data)
  }

  return (
    <>
    <Nav/>
    <section className="contact-container">
    <div className="contact-text">
    <h1 className='contact-title2'>contact</h1>
    <p>Thank you for taking the time to explore my portfolio! If you have any questions or want to be in touch, please feel free to reach out.</p>
    </div>
    <form action='https://formspree.io/f/mnqygknq' method='POST' 
    //  onSubmit={handleSubmit(obtenerValores)}
    className='contact-form'>
      {contactData.map((field, i)=>{
        if(field.type==='textarea'){
          return(
            <div className={field.class} key={i}>
              <div className="field-complete">
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
            <textarea name={field.name} id={field.name} rows='7' autoComplete="off" required
            // {...register(field.name,field.requirements)}
            />
            </div>

        {/* {errors.message?.type === 'required' && field.name === 'message' && <div className='alert'>This field is required</div>} */}

          </div>
          )}
          else{
          return(
          <div className={field.class} key={i}>
            <div className="field-complete">
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
          <input type={field.type} name={field.name} id={field.name} autoComplete="off" required
          // {...register(field.name,field.requirements)}
          />
          </div>
        
        {/* {errors.name?.type === 'required' && field.name === 'name' && <div className='alert'>This field is required</div>}
        {errors.name?.type === 'maxLength' && field.name === 'name'  && <div className='alert'>The maximum amount of characters is {field.requirements.maxLength}</div>}

        {errors.email?.type === 'required' && field.name === 'email' && <div className='alert'>This field is required</div>} */}
        
        </div>
      )}
})}
      <div className="submit-box"><input type='submit' value='Submit'/></div>
    </form>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
