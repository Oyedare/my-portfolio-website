import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    /* background-color: red; */
    padding-top: 12rem;
    p{
    color: rgba(255, 255, 255, 0.6);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4px;
    /* line-height: ; */
    }
    h1{
        font-size: 55px;
        color: #fff;
        line-height: 1.5;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 10px;
        display: inline-block;
        position: relative;
    }
`