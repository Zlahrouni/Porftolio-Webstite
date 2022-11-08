import React from 'react'
import { motion } from 'framer-motion'
import { BsTwitter, BsGithub, BsChevronDoubleRight} from 'react-icons/bs'
import { FaLinkedin} from 'react-icons/fa'
import AppWrap from '../../Wrapper/AppWrap'

import assets from '../../constants/assets'

import './Home.scss'

const Home = () => {
  return (
    <div className="app__header app__flex app__container app__wrapper">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6 }}
    >
      
      <div className='header__cont'>
      
        <div className='home-title head-text '>Ziad Larhouni</div>
        <h3 className="white-text">L3 en Conception et Developpement d'Applications</h3>

        <div className="app__header-social">
            <a href="https://twitter.com/LahrouniZiad" target="__blank"><div><BsTwitter/></div></a>   
            <a href="https://www.linkedin.com/in/ziad-lahrouni/" target="__blank"><div><FaLinkedin/></div></a>
            <a href="https://github.com/Zlahrouni" target="__blank"><div><BsGithub/></div></a>
       </div>
       <br />
       
       <a className='btn btn-primary' href="/About">See More <BsChevronDoubleRight/></a>
       
      </div>
      
    </motion.div>
    </div>
  )
}

export default Home