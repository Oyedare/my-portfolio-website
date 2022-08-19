import React,{useState} from 'react'
import { MenuContainer, StyledNav } from '../styles/Navbar.styled'
import avatar from '../assets/avatar.png'
// import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import {CgClose,CgMenuHotdog} from 'react-icons/cg'
// import {GrClose} from 'react-icons/gr'
const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  return (
    <>
        {!isClicked ? (
          <StyledNav>
            <div className="img">
              <img src={avatar} alt="" />
              <h1>Temiloluwa</h1>
            </div>
            <div className="menu" onClick={()=>setIsClicked(!isClicked)}>
              <CgMenuHotdog size={40}/>
            </div>
          </StyledNav>
        ):(
          <MenuContainer>
            <div className="close-btn" onClick={()=>setIsClicked(!isClicked)}>
              <CgClose size={50}/>
            </div>
            <div className="menu-content">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Skills</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </div>
          </MenuContainer>
        )}
      
    </>
  )
}

export default Navbar