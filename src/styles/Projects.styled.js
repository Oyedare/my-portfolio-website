import styled from 'styled-components';

export const StyledProject = styled.div`
    margin-top: 8rem;
    text-transform: capitalize;
    h2{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.08);
        text-transform: uppercase;
        font-size: 8rem;
    }
    .projects{
        margin-top: 2rem;
        .project{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8rem;
            /* row-gap: 5rem; */
            .project-img{
                width: 100%;
                margin-right: 5rem;
                img{
                    width: 100%;
                }
            }
            .project-text{
                h4{
                    font-size: 1rem;
                    font-weight: 500;
                    letter-spacing: 5px;
                    color: var(--blue);
                }
                h3{
                    line-height: 1.2;
                    letter-spacing: 5px;
                    font-weight: 900;
                    font-size: 3rem;
                    color: var(--white);
                    padding-block-start: 1rem;
                }
                p{
                    padding-block-start: 1.5rem;
                    color: var(--white);
                    font-size: 1rem;
                }
                .stack{
                    display: flex;
                    gap: 2rem;
                    margin-top: 1rem;
                    h5{
                        color: var(--white);
                        background-color: #8c8c8c;
                        padding: .5rem .8rem;
                        border-radius: 5px;
                        font-weight: 400;
                    }
                }
                .links{
                    display: flex;
                    gap: 2rem;
                    a{
                        color: var(--white);
                    }
                }
            }
            &:nth-child(even){
                flex-direction: row-reverse;
                .project-img{
                    margin-right: 0;
                }
                .project-text{
                    margin-right: 5rem;
                }
            }
        }
    }

    @media(max-width: 1024px) {
        h2{
            font-size: 6rem;
        }
    }
    @media(max-width: 768px) {
        .projects{
            .project{
                flex-direction: column;
                justify-content: center;
                gap: 2rem;
                .project-img{
                    margin-right: 0;
                }
                &:nth-child(even){
                    flex-direction: column;
                    .project-text{
                        margin-right: 0;
                    }
                }
            }
        }
    }
    @media(max-width: 425px) {
        h2{
            font-size: 4rem;
            justify-content: center;
        }
        .projects{
            .project{
                gap: 0rem;
                .project-text{
                    h3{
                        font-size: 2rem;
                    } 
                    p{
                        font-size: .8rem;
                    }
                    .stack{
                        h5{
                            font-size: .8rem;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 425px) {
        h2{
            font-size: 3rem;
        }
    }
`