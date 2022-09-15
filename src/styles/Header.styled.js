import styled from 'styled-components';

export const StyledHeader = styled.div`
    /* height: 80vh; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12rem 0;
    .pattern1,.pattern2,.pattern3,.pattern4,.pattern5{
        position: absolute;
        display: none;
    }
    .pattern1{
        bottom: -120%;
        left: 19%;
    }
    .pattern2{
        left: -10%;
        bottom: 10%;
        /* left: -10%; */
        img{
            transform: rotate(45deg);
        }
    }
    .pattern3{
        bottom: 0%;
        left: 0%;
        img{
            transform: rotate(45deg);
            opacity: 0.5;
        }
    }
    /* .pattern4{
        bottom: 0;
    } */
    .text{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
        }
        h1{
            font-size: 4rem;
            color: #fff;
            line-height: 1.5;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 10px;
            /* display: inline-block; */
            position: relative;
        }
    }

    @media(min-width: 1468px) {
        .pattern1,.pattern2,.pattern3{
            display: none;
        }
    }

    @media(max-width: 768px) {
        padding: 10rem 0;
        .text{
            h1{
                letter-spacing: 6px;
                font-size: 2rem;
            }
        }
    }
    @media(max-width: 425px) {
        padding: 8rem 0;
        .text{
            justify-content: center;
            text-align: center;
            /* background-color: red; */
            h1{
                /* background-color: blue; */
                width: 100%;
            }
        }
    }
    @media(max-width: 320px) {
        .text{
            /* margin: 8rem 0; */
            p{
                font-size: 1.2rem;
            }
            h1{
                /* font-size: 40px; */
            }
        }
    }   
`