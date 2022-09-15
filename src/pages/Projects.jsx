import React, { useEffect } from 'react'
import { StyledProject } from '../styles/Projects.styled'
import cooky from '../assets/cooky.png'
import calend from '../assets/Calendee1.png'
import manage from '../assets/manage.png'
import rand from '../assets/rand.png'
import tech from '../assets/Rhematech.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const Projects = () => {
  const projects = [
    {
      img: calend,
      type: "web app",
      title: "Calendee",
      desc: "Calendee is a scheduling platform that aids in setting appointments at different time ranges. It accepts authentication of users and also allows them create recurring appointments.",
      stack: ["React","CSS","Tailwind","Firebase","Sync-Fusion","Framer Motion"],
      links: [
        {
          live: "https://calendee.netlify.app/",
          github: "https://github.com/Oyedare/Calendee"
        }
      ]
    },
    {
      img: manage,
      type: "website",
      title: "manage landing page",
      desc: "",
      stack: ["Next.js","Styled-Components"],
      links: [
        {
          live: "https://manage-landing-page-ten-eta.vercel.app/",
          github: "https://github.com/Oyedare/Manage-Landing-Page"
        }
      ]
    },
    {
      img: cooky,
      type: "web app",
      title: "Cooky",
      desc: "Cooky is a food recipe app that wires to a public provided API to give users ingredients to their favorite dish",
      stack: ["React","Styled-Components","API"],
      links: [
        {
          live: "https://cooky-app.netlify.app/",
          github: "https://github.com/Oyedare/Cooky-Recipe-app-"
        }
      ]
    },
    {
      img: rand,
      type: "web app",
      title: "random advice generator",
      desc: "Random Advice Generator lists out random advices for whenever you feel anxious.",
      des2: "It was built for fun and was an avenue to learn how to fetch from APIs",
      stack: ["React","CSS","API"],
      links: [
        {
          live: "https://random-advice-webapp.netlify.app/",
          github: "https://github.com/Oyedare/random-advice-generator"
        }
      ]
    },
    {
      img: tech,
      type: "website",
      title: "Rhematech",
      desc: "",
      stack: ["HTML","Css","JavaScript"],
      links: [
        {
          live: "https://oyedare.github.io/Rhema-project-limited-website/",
          github: "https://github.com/Oyedare/Rhema-project-limited-website"
        }
      ]
    },
  ]

  const [ref,inView] = useInView({
    // threshold: '0.2'
  })
  const animate = useAnimation()
  const animation = useAnimation()
  useEffect(() =>{
    if(inView){
      animate.start({
        x: 0,
        transition: {
          type: 'spring',duration: 1.5, bounce: 0.3
        }
      })
      animation.start({
        x: 0,
        transition: {
          type: 'spring',duration: 1.5, bounce: 0.3
        }
      })
    }
    if(!inView){
      animate.start({
        x: '-100vw'
      })
      animation.start({
        x: '100vw'
      })
    }
  })
  return (
    <StyledProject id='#projects' className='container'>
      <h2>Projects</h2>
      <div className='projects' ref={ref}>
        {projects.map(({img,type,title,desc,stack,links,des2})=>(
          <div className="project" key={title}>
            <motion.div className="project-img" animate={animation}>
              <img src={img} alt="" />
            </motion.div>
            <motion.div className="project-text" animate={animate}>
              <h4>{type}</h4>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p>{des2}</p>
              <div className="stack">
                {stack.map(item => 
                  <h5 key={item}>
                    {item}
                  </h5>
                )}
              </div>
                  {links.map(({live,github})=>(
                    <div className="links" key={live}>
                      <p><a href={live} target="_blank" rel="noreferrer">Live</a></p>
                      <p><a href={github} target="_blank" rel="noreferrer">Github</a></p>
                    </div> 
                  ))}  
            </motion.div>
          </div>
        ))}
      </div>
    </StyledProject>
  )
}
