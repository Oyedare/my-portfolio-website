import React from 'react'
import { SContact } from '../styles/Contact.styled'
import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import { motion } from 'framer-motion'
export const Contact = () => {
  return (
    <SContact id='#contact' className='container'>
      <div className="top">
        <motion.div className="logo" whileHover={{scale: 1.3}}>
          <a href="https://twitter.com/_stephentony_">
            <AiFillTwitterCircle size={60}/>
          </a>
        </motion.div>  
        <motion.div className="logo" whileHover={{scale: 1.3}}>
          <a href="https://github.com/Oyedare">
            <AiFillGithub size={60}/>  
          </a>
        </motion.div>  
        <motion.div className="logo" whileHover={{scale: 1.3}}>
          <a href="https://www.linkedin.com/in/oyedaretemiloluwa">
            <AiFillLinkedin size={60}/>  
          </a>
        </motion.div>  
      
      </div>

      <div className="bottom">
        <h3>Contact Me</h3>
        <p>ooyedaretemiloluwa@gmail.com</p>
      </div>
    </SContact>
  )
}
