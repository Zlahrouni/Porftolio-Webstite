import React from "react";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";

// Locals
import { configData } from "../../..";
import { AppWrap } from "../../Wrapper";
import { Popup } from "../../components";

import "./Contact.scss";
const Contact = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [Captcha, setCaptcha] = useState(false);
  const [validCaptcha, setvalidCaptcha] = useState(false);
  function onValid() {
    setvalidCaptcha(true);
  }

  const form = useRef();

  const CaptchaPopup = (e) => {
    e.preventDefault();
    setCaptcha(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      configData.EMAILJS__SERVICE_ID,
      configData.EMAILJS__TEMPLATE_ID,
      form.current,
      configData.EMAILJS__PUBLIC_KEY
    );
    setButtonPopup(true);
    e.target.reset();
  };

  if (buttonPopup) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6 }}
      className="app__contact"
    >
      <>
        <h2 className="head-text head-text-margin">Contact Me</h2>
        <div className="app__footer-cards">
          {!validCaptcha ? (
            <div onClick={CaptchaPopup}>
              <div className="app__footer-card  ">
                <AiOutlineMail />
                <div className="about"> : Click to display</div>
              </div>
            </div>
          ) : (
            <div className="app__footer-card">
              <AiOutlineMail />
              <a href="mailto:ziad.lahrouni@gmail.com" className="p-text about">
                : ziad.lahrouni@gmail.com
              </a>
            </div>
          )}

          {!validCaptcha ? (
            <div onClick={CaptchaPopup}>
              <div className="app__footer-card">
                <AiOutlinePhone />
                <div className="about">: Click to display</div>
              </div>
            </div>
          ) : (
            <div className="app__footer-card">
              <AiOutlinePhone />
              <a href="tel:+3300000000" className="p-text about">
                : +3300000000
              </a>
            </div>
          )}
        </div>

        <Popup trigger={Captcha} setTrigger={setCaptcha}>
          <h3 className="about">Êtes-vous un robot ? 🤔:</h3> <br />
          <ReCAPTCHA
            sitekey={configData.GOOGLE__CAPATCHA_TOKEN}
            onChange={onValid}
          />
        </Popup>

        <form ref={form} onSubmit={sendEmail}>
          <div className="app__footer-form app__flex">
            <div className="app__flex work-item-container">
              <input
                className="p-text text-area"
                type="text"
                name="name"
                placeholder="Your Name*"
                required
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text text-area"
                type="text"
                name="entreprise"
                placeholder="Company"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text text-area"
                type="email"
                name="email"
                placeholder="Your email*"
                required
              />
            </div>
            <div className="app__flex">
              <textarea
                name="message"
                className="text-area"
                rows="7"
                placeholder="message...*"
                required
              ></textarea>
            </div>
            <button className="app__footer-button" type="submit">
              Envoyer le message
            </button>
          </div>
        </form>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3 className="about">Merci pour votre message!</h3>
        </Popup>
      </>
    </motion.div>
  );
};

export default AppWrap(Contact, "contact");
