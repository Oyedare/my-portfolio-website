import React from 'react'
import { StyledSkill } from '../styles/Skills.styled'

export const Skills = () => {
    const skills = [
        {
            skill: "HTML",
            id: 1
        },
        {
            skill: "CSS",
            id: 1
        },
        {
            skill: "SCSS",
            id: 1
        },
        {
            skill: "Styled-Components",
            id: 1
        },
        {
            skill: "Tailwind",
            id: 1
        },
        {
            skill: "JavaScript",
            id: 1
        },
        {
            skill: "React",
            id: 1
        },
        {
            skill: "Next.js",
            id: 1
        },
        {
            skill: "Git",
            id: 1
        },
        {
            skill: "Github",
            id: 1
        },
       
        
    ]
  return (
    <StyledSkill id="#skills">
        <h2>Skills</h2>
        <div className="text">
            <p className='skill-summary'>As a frontend developer i've learnt and worked with the technologies a frontend developer utilizes, i'm currently learning TypeScript but here are the ones i work with:</p>
            <div className="skills">
                {skills.map(({skill,id})=>(
                    <div className='skill' key={id}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    </StyledSkill>
  )
}
