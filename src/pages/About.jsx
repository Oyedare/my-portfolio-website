import React from 'react'
import { StyledAbout } from '../styles/About.styled'
import profile from '../assets/profile.jpg'
export const About = () => {
  return (
    <StyledAbout>
      <h2>About</h2>
      <div className="profile">

        <div className="profile-img">
          <img src={profile} alt="" />
        </div>

        <div className="text">
          <p>I'm passionate about deciphering challenging problems and creating exceptional digital experience.</p>
          <p>As I've grown as a developer, I've contributed to projects and worked with other developers to create working applications and have written code that are maintainable and easy to understand.</p>
          <p>Through my studies, I've gained a solid understanding of web development concepts, and have dedicated a lot of time to apply these concepts to real-world scenarios and applications.</p>
          <p>When I'm not trying to build, learning, exploring and thinking about how to make things better 😉, you can catch me watching football matches ⚽.</p>
        </div>
        
      </div>
      
    </StyledAbout>
  )
}
