import React from 'react'
import { StyledSkill } from '../styles/Skills.styled'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export const Skills = () => {
    const skills = [
        {
            skill: "HTML",
            id: 12
        },
        {
            skill: "CSS",
            id:13
        },
        {
            skill: "SCSS",
            id: 14
        },
        {
            skill: "Styled-Components",
            id: 15
        },
        {
            skill: "Tailwind",
            id: 16
        },
        {
            skill: "JavaScript",
            id: 17
        },
        {
            skill: "React",
            id: 18
        },
        {
            skill: "Next.js",
            id: 19
        },
        {
            skill: "Git",
            id: 100
        },
        {
            skill: "Github",
            id: 187
        },
       
        
    ]
    const [ref,inView] = useInView({
        threshold: 0.3
    })
    const animate = useAnimation()
    useEffect(()=>{
        if(inView){
            animate.start({
                opacity: 1,
                transition: {
                  staggerChildren: 0.5
                }
            })
        }
        if(!inView){
            animate.start({
                opacity: 0
            })
        }
    })
  return (
    <StyledSkill id="#skills" className='container' ref={ref}>
        <motion.h2 animate={animate}>Skills</motion.h2>
        <motion.div className="text" animate={animate}>
            <motion.p className='skill-summary' animate={animate}>As a frontend developer i've learnt and worked with the technologies a frontend developer utilizes, i'm currently learning TypeScript but here are the ones i work with:</motion.p>
            <motion.div className="skills" animate={animate}>
                {skills.map(({skill,id})=>(
                    <motion.div className='skill' key={id} animate={animate}>
                        {skill}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    </StyledSkill>
  )
}
