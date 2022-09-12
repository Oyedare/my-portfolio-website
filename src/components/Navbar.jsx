import React,{useState} from 'react'
import { MenuContainer, StyledNav } from '../styles/Navbar.styled'
import avatar from '../assets/avatar.png'
// import { AiOutlineMenu } from 'react-icons/ai'
import {CgClose,CgMenuHotdog} from 'react-icons/cg'
// import {GrClose} from 'react-icons/gr'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  if(isClicked){
    document.body.style.overflowY = 'hidden'
    document.body.style.overflowX = 'hidden'
  }
  else{
    document.body.style.overflowY = 'scroll'
    document.body.style.overflowX = 'hidden'
  }
  return (
    <motion.div
      initial={{y:-100}}
      animate={{y:0}}
      transition={{ type: "spring", stiffness: 100,delay: 0.5 }}>
      <StyledNav className='container'>
        <div className="img">
          <img src={avatar} alt="" />
          <h1>Temiloluwa</h1>
        </div>

        <div className="menu" onClick={()=>setIsClicked(!isClicked)}>
          <CgMenuHotdog size={40} color={'#fff'} cursor={'pointer'} className='ham'/>
        </div>
      </StyledNav>
      {isClicked && (
        <MenuContainer>
          <div className="close-btn" onClick={()=>setIsClicked(!isClicked)}>
            <CgClose size={50}/>
          </div>
          <div className="menu-content">
            <motion.a 
              href="/" 
              onClick={()=>setIsClicked(!isClicked)}
              initial={{opacity: 0, y: -40}}
              animate={{opacity:1, y: 0}}
              transition={{delay: 0.30}}
              >Home</motion.a>
            <motion.a 
              href="#about" 
              onClick={()=>setIsClicked(!isClicked)}
              initial={{opacity: 0, y: -40}}
              animate={{opacity:1, y: 0}}
              transition={{delay: 0.45}}
              >About</motion.a>
            <motion.a 
              href="#skills"
              onClick={()=>setIsClicked(!isClicked)}
              initial={{opacity: 0, y: -40}}
              animate={{opacity:1, y: 0}}
              transition={{delay: 0.60}}
              >Skills</motion.a>
            <motion.a 
              href="#projects" 
              onClick={()=>setIsClicked(!isClicked)}
              initial={{opacity: 0, y: -40}}
              animate={{opacity:1, y: 0}}
              transition={{delay: 0.75}}
              >Projects</motion.a>
            <motion.a 
              href="#contact" 
              onClick={()=>setIsClicked(!isClicked)}
              initial={{opacity: 0, y: -40}}
              animate={{opacity:1, y: 0}}
              transition={{delay: 0.90}}
              >Contact</motion.a>
          </div>
        </MenuContainer>
      )}
    </motion.div>
  )
}

export default Navbar