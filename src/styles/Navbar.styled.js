import styled from 'styled-components';

export const StyledNav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
.img{
    width: 5%;
    display: flex;
    align-items: center;
    gap: .3rem;
    img{
        width: 100%;
    }
    h1{
        color: #fff;
        font-size: 20px;
        text-transform: uppercase;
        color: #fff;
        font-weight: 400;
        letter-spacing: 5px;
        padding: 7px;
        display: block;
        text-align: center;
        position: relative;
    }
}
.menu{
    color: var(--white);
    cursor: pointer;
}
@media(max-width: 768px) {
    .img{
        width: 7%;
    }
}
@media(max-width: 425px) {
    .img{
        width: 15%;
        h1{
            display: none;
        }
    }
}
`

export const MenuContainer = styled.div`
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
    -webkit-animation: scale-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: scale-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    color: #fff;
    
    @-webkit-keyframes scale-in {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}
@keyframes scale-in {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}

  .close-btn{
    position: absolute;
    right: 3rem;
    top: 3rem;
    cursor: pointer;
  }
  .menu-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    height: inherit;
    a{
        color: whitesmoke;
        font-size: 2rem;
        margin-bottom: 2rem;
        text-align: start;
    }
  }
  @media(max-width: 425px) {
    .close-btn{
        top: 2rem;
        right: 1.5rem;
    }
  }
`