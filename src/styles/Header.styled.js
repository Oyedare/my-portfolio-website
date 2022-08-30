import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 12rem 0;
    p{
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    }
    h1{
        font-size: 55px;
        color: #fff;
        line-height: 1.5;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 10px;
        /* display: inline-block; */
        position: relative;
    }
    @media(max-width: 768px) {
        h1{
            letter-spacing: 6px;
            font-size: 2rem;
        }
    }
    @media(max-width: 425px) {
        justify-content: center;
        text-align: center;
    }
    @media(max-width: 320px) {
        margin: 8rem 0;
        p{
            font-size: 1.2rem;
        }
        h1{
            font-size: 40px;
        }
    }   
`