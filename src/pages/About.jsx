import React, { useEffect } from 'react'
import { StyledAbout } from '../styles/About.styled'
import profile from '../assets/profile.jpg'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
// import pattern1 from '../assets/pattern1.svg'
export const About = () => {

  const [ref,inView] = useInView({
    threshold: 0.2
  })
  const animation = useAnimation()

  useEffect(()=>{
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring',duration: 1.5, bounce: 0.3
        }
      })
    }
    if(!inView){
      animation.start({
        x: '-100vw'
      })
    }
  })

  return (
    <StyledAbout id='about' className='container' ref={ref}>
      <motion.h2 animate={animation}>About</motion.h2>
      <motion.div className="profile" animate={animation}>
        <div className="profile-img">
          <img src={profile} alt="" />
        </div>

        <div className="text">
          <p>Creating a unique style for myself in the digital space via my creative mind is what I crave, so much so that someone could easily tell I worked on a project just by looking at it.</p>
          <p>Its a goal that's still in the workings, over the years I've worked as a developer with various other talented individuals and on different projects that broadened my knowledge and set a clearer picture of where I'm headed.</p>
          <p>I've learnt how to use many digital technologies that are high in demand on the market as we speak. I also learnt how to satisfy a project's need by analyzing the task; highlighting the problems and learning how to solve them effectively.</p>
          <p>I tend to be a stickler most of the times and can spend hours typing away on the keyboard till I get the results I desire (it's very stressful sometimes 😩).</p>
          <p>If you don't find me  glued to my laptop screen spoiling my  eyesight from radiation, then I'm probably watching a Manchester United Match. 🤧❤️ </p>
        </div>
      </motion.div>
      
    </StyledAbout>
  )
}
