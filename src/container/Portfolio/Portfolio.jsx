import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { AppWrap } from '../../Wrapper'
import { assets } from '../../constants'
import './Portfolio.scss'

const Portfolio = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">Portfolio</h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
          {/*First project*/}
          <div className="app__work-item work-item-container app__flex" key="project1">
            <div
              className="app__work-img app__flex"
            >
              <img src={assets.project1image} alt="project" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              
                <a href="https://github.com/zlahrouni" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text about">Title</h4>
              <p className="p-text about-primary work-description" style={{ marginTop: 10 }}>"Desc :Lorem ipsum dolor sit amet."</p>

            </div>
            
          </div>

          {/*Seconde project project*/}
          <div className="app__work-item work-item-container app__flex" key="Project two">
            <div
              className="app__work-img app__flex"
            >
              <img src={assets.project2image} alt="project" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              
                <a href="https://github.com/zlahrouni" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text about">Title</h4>
              <p className="p-text about-primary work-description" style={{ marginTop: 10 }}>"Desc :Lorem ipsum dolor sit amet."</p>

            </div>
            
          </div>


          {/*Third project project*/}
          <div className="app__work-item work-item-container app__flex" key="Project two">
            <div
              className="app__work-img app__flex"
            >
              <img src={assets.project1image} alt="project" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                
                <a href="https://dribbble.com" target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              
                <a href="https://github.com/zlahrouni" target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text about">Title</h4>
              <p className="p-text about-primary work-description" style={{ marginTop: 10 }}>"Desc :Lorem ipsum dolor sit amet."</p>

              
            </div>
            
          </div>
        
      </motion.div>
    </>
  )
}

export default AppWrap(Portfolio, 'portfolio')