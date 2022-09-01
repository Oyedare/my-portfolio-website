import React from 'react'
import { SContact } from '../styles/Contact.styled'
import {AiFillTwitterCircle,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
export const Contact = () => {
  return (
    <SContact id='#contact'>
      <div className="top">
        <div className="logo">
          <a href="https://twitter.com/_stephentony_">
            <AiFillTwitterCircle size={60}/>
          </a>
        </div>  
        <div className="logo">
          <a href="https://github.com/Oyedare">
            <AiFillGithub size={60}/>  
          </a>
        </div>  
        <div className="logo">
          <a href="https://www.linkedin.com/in/oyedaretemiloluwa">
            <AiFillLinkedin size={60}/>  
          </a>
        </div>  
      
      </div>

      <div className="bottom">
        <h3>Contact Me</h3>
        <p>ooyedaretemiloluwa@gmail.com</p>
      </div>
    </SContact>
  )
}
