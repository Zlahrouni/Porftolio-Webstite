import React from 'react'
import { AppWrap } from '../../Wrapper'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import ReCAPTCHA from "react-google-recaptcha";
import { Popup } from '../../components';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'


import './Contact.scss'
const Contact = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [Captcha, setCaptcha] = useState(false)
  const [validCaptcha, setvalidCaptcha] = useState(false)
  function onValid()
  {
    setvalidCaptcha(true);
    
  }

  const form =useRef();
  

  const CaptchaPopup = (e) => {
    e.preventDefault();
    setCaptcha(true);
    
  };
 
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_va4yxr7', 'template_bs5mmls', form.current, 'zw5MtDpOCLfjae3SO')
    setButtonPopup(true)
    e.target.reset();
    
  };

  if(buttonPopup) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <h2 className="head-text head-text-margin">Contact Me</h2>
      <div className="app__footer-cards">
        
          {!validCaptcha ? (
            
              <a onClick={CaptchaPopup}>
                <div className="app__footer-card  ">
                  <AiOutlineMail/>
                  <div className='about'> : Cliquez pour afficher</div>
               </div>
              </a>
            
          
          ) : (
            <div className="app__footer-card">
            <AiOutlineMail/>
            <a href="mailto:ziad.lahrouni@gmail.com" className="p-text about">: ziad.lahrouni@gmail.com</a>
          </div>
          )}
        
        
          {!validCaptcha ? (
          
            <a onClick={CaptchaPopup}>
              <div className="app__footer-card">
                <AiOutlinePhone/>
                <div className='about'>: Cliquez pour afficher</div>
              </div>
            </a>
          
          
          ) : 
          (
          <div className="app__footer-card">
            <AiOutlinePhone/>
            <a href="tel:+33752964331" className="p-text about">: +33752964331</a>
          </div>
          
          )}
      </div>

      <Popup trigger={Captcha} setTrigger={setCaptcha}>
        <h3 className='about'>Êtes-vous un robot ? 🤔:</h3> <br />
        <ReCAPTCHA
            sitekey= "6LeOvmgiAAAAAPKlEivpbz8RjA_KgTJ561UZpCre" // change this
            onChange={onValid}
          />
      </Popup>

      {/*
      6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI //fake
      */}
      
      
      
        <form ref={form} onSubmit={sendEmail} >
        <div className='app__footer-form app__flex'>
          <div  className="app__flex work-item-container">
            <input className='p-text work-item-container about' type="text" name='name' placeholder='Votre nom*' required/>
          </div>
          <div className="app__flex">
            <input className='p-text work-item-container about' type="text" name='entreprise' placeholder='Entreprise' />
          </div>
          <div className="app__flex">
            <input className='p-text work-item-container about' type="email" name='email' placeholder='votre email*' required/>
          </div>
          <div className="app__flex">
          <textarea name="message" className='work-item-container about' rows="7" placeholder='votre message...*' required></textarea>
          </div>
          <button className='app__footer-button' type='submit' >Envoyer le message</button>
        </div>
        </form>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3 className='about'>Merci pour votre message!</h3>
        </Popup>
        
    </>
  );
}

export default AppWrap(Contact, 'contact')