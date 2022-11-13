import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../Wrapper'
import './About.scss'

const About = () => {
  return (
    <div className='app__about '>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6 }}
      className='app__bout-content'
      >
      <h2 className='white-text app__about-title'>Who Am I</h2>
      <div className='app__about-description'>
        <p className='white-text' >
        I am... Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus esse maxime officiis rem temporibus                     
        </p>
      </div>
      </motion.div>
      </div>
  )
}

export default AppWrap(About, 'about')