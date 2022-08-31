import styled from 'styled-components';

export const SContact = styled.div`
margin-top: 2rem;
 .top{
    display: flex;
    justify-content: center;
    gap: 3rem;
    a{
        color: var(--text);
    }
 }
 .bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    color: var(--white);

    h3{
        font-size: 2rem;
    }
 }
`