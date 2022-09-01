import React from 'react'
import { StyledProject } from '../styles/Projects.styled'
import cooky from '../assets/cooky.png'
import countdown from '../assets/Countdown.png'
import manage from '../assets/manage.png'
import rand from '../assets/rand.png'
import tech from '../assets/Rhematech.png'
export const Projects = () => {
  const projects = [
    {
      img: manage,
      type: "website",
      title: "manage landing page",
      desc: "Manage is a practice challenge i took up from frontend mentor",
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
      desc: "Cooky is a food recipe app that wires to a public provided API to give users ingredients to their favorite recipes",
      stack: ["React","Styled-Components"],
      links: [
        {
          live: "https://cooky-app.netlify.app/",
          github: "https://github.com/Oyedare/Cooky-Recipe-app-"
        }
      ]
    },
    {
      img: tech,
      type: "website",
      title: "Rhematech",
      desc: "A landing page built for a world class infrastrure institution following their ground breaking record.",
      stack: ["HTML","Css","JavaScript"],
      links: [
        {
          live: "https://oyedare.github.io/Rhema-project-limited-website/",
          github: "https://github.com/Oyedare/Rhema-project-limited-website"
        }
      ]
    },
    {
      img: countdown,
      type: "web app",
      title: "Countdown App",
      desc: "A web app counting down to a big business open day",
      stack: ["HTML","CSS","JS"],
      links: [
        {
          live: "https://countdown-app-mu.vercel.app/",
          github: "https://github.com/Oyedare/countdown-app"
        }
      ]
    },
    {
      img: rand,
      type: "web app",
      title: "random advice generator",
      desc: "Ever got confused or perplexed? An advice app to give you random advices",
      stack: ["React","CSS"],
      links: [
        {
          live: "https://random-advice-webapp.netlify.app/",
          github: "https://github.com/Oyedare/random-advice-generator"
        }
      ]
    }
  ]
  return (
    <StyledProject id='#projects'>
      <h2>Projects</h2>
      <div className='projects'>
        {projects.map(({img,type,title,desc,stack,links})=>(
          <div className="project">
            <div className="project-img">
              <img src={img} alt="" />
            </div>
            <div className="project-text">
              <h4>{type}</h4>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="stack">
                {stack.map(item => 
                  <h5>
                    {item}
                  </h5>
                )}
              </div>
                  {links.map(({live,github})=>(
                    <div className="links">
                      <p><a href={live}>Live</a></p>
                      <p><a href={github}>Github</a></p>
                    </div> 
                  ))}  
            </div>
          </div>
        ))}
      </div>
    </StyledProject>
  )
}
