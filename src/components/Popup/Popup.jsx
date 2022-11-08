import React from 'react'
import './Popup.scss'
import { AiOutlineClose} from 'react-icons/ai'
const Popup = (props) => {

  
  return (props.trigger) ? (
    <div className='footer__popup'>
          <div className="footer__popup-inner work-item-container">
              <div className='pop-text'>{props.children}</div>
              <a className='close-btn work-item-container' onClick={() => props.setTrigger(false)}><AiOutlineClose/></a>
          </div>
    </div>
  ) : "";
}

export default Popup