import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../Wrapper'
import './About.scss'

const About = () => {
  return (
    <div className='app__about app__flex app__wrapper app__container'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.6 }}
      >
      <h2 className='white-text'>Who Am I</h2>
      <p className='white-text' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta quia totam numquam repudiandae, aliquid labore architecto accusantium, natus repellendus porro consequatur pariatur id ratione consequuntur itaque quo fuga voluptatum consectetur aut culpa! Perspiciatis sit eligendi, corrupti doloribus laborum laudantium saepe, atque voluptatem numquam earum inventore maxime quaerat, obcaecati perferendis qui voluptatum beatae consequatur recusandae reiciendis ducimus veritatis. Ratione quia quibusdam nesciunt adipisci. Est at id asperiores accusamus inventore accusantium vel ratione aperiam incidunt in, tenetur corporis autem sint alias eum ad sed itaque quae porro? Incidunt beatae eveniet voluptates iste, enim inventore sint, placeat nihil consectetur, vel eaque architecto repudiandae repellat molestias. Ipsa saepe ipsam doloremque sunt voluptas, quod consectetur debitis qui amet, quos, dolorem assumenda tenetur rem illum? Quas soluta veniam maxime facilis beatae. Distinctio eligendi quia soluta eum quam sunt illo magni alias amet deserunt officiis libero doloribus cum excepturi, doloremque ad aliquam. Sunt, soluta! Aperiam, fuga!</p>
      </motion.div>
      </div>
  )
}

export default AppWrap(About, 'about')