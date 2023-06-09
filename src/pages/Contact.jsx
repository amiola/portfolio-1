import React, { useContext } from 'react'
import Nav from '../navbar/Nav'
import {useForm} from 'react-hook-form'
import { contactData, contactValues } from './assets/contact'
import './styles/Contact.css'
import Footer from '../footer/Footer'
import Context from '../context/Context'

const Contact = () => {
  // const {register, handleSubmit, formState:{errors}, watch, setFocus, resetField} = useForm();
  // const obtenerValores = (data)=>{console.table(data)}

  const {language} = useContext(Context)
  return (
    <>
    <Nav/>
    <section className="contact-container">
    <div className="contact-text">
    <h1 className='contact-title2'>{contactValues[language].contact}</h1>
    <p>{contactValues[language].message}</p>
    </div>
    <form action='https://formspree.io/f/mnqygknq' method='POST' 
    //  onSubmit={handleSubmit(obtenerValores)}
    className='contact-form'>
      {contactData.map((field, i)=>{
        if(field.type==='textarea'){
          return(
            <div className={field.class} key={i}>
              <div className="field-complete">
            <label htmlFor={field.name}>{field.title[language]}:</label>
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
          <label htmlFor={field.name}>{field.title[language]}:</label>
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
      <div className="submit-box"><input type='submit' value={contactValues[language].submit}/></div>
    </form>
    </section>
    <Footer/>
    </>
  )
}

export default Contact
