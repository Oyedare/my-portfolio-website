import React, { useEffect, useState } from 'react'
// import { W } from '../assets/WaveLine'
// import pattern from '../assets/pattern.svg'
// import pattern1 from '../assets/pattern1.svg'
import pattern2 from '../assets/pattern2.svg'
import pattern3 from '../assets/pattern3.svg'
// import pattern4 from '../assets/pattern4.svg'
// import pattern5 from '../assets/pattern5.svg'
import { StyledHeader } from '../styles/Header.styled'
import { motion } from 'framer-motion'

export const Header = () => {
  const transText= [
    {
      sm: "Hello👋🏾, I'm",
      bold: "Temiloluwa"
    },
    {
      sm: "I'm from Nigeria",
      bold: "Frontend Developer"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(()=>{
    const intervalId = setInterval(() =>{
      if (currentIndex === transText.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearInterval(intervalId);

  },[currentIndex, transText.length])

  return (
    <StyledHeader>
      <motion.div 
        initial={{scale: 0}}
        animate={{scale:1}}
        transition={{duration: 2}}
        className="text container">
        <p>{transText[currentIndex].sm}</p>
        <h1>{transText[currentIndex].bold}</h1>
      </motion.div>
      <motion.div 
        className="pattern2"
        initial={{y:0,x:0}}
        animate={{y:-12,x:8}}
        transition={{duration: 2,repeatType: "reverse",repeat: Infinity}}>
        <img src={pattern2} alt="" />
      </motion.div>
      <motion.div 
        className="pattern3"
        initial={{y:0,x:0}}
        animate={{y:-12,x:8}}
        transition={{duration: 2,repeatType: "reverse",repeat: Infinity}}>
        <img src={pattern3} alt="" />
      </motion.div>
    </StyledHeader>
  )
}
