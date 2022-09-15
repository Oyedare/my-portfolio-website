import styled from 'styled-components';

export const StyledAbout = styled.div`
    position: relative;
    h2{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.08);
        text-transform: uppercase;
        font-size: 9rem;
    }

    .profile{
        display: flex;
        justify-content: space-between;
        position: relative;
        .profile-img{
            width: 40%;
            img{
                width: 100%;
            }
        }
        .text{
            width: 50%;
            p{
                padding-block-start: 1rem;
                line-height: 1.8;
                font-size: 1rem;
                color: var(--white);
            }
        }
    }
    
    @media(max-width: 1024px) {
        h2{
            font-size: 8rem;
        }
        .profile{
            align-items: center;
            .text{
                p{
                    font-size: 1rem;
                    padding-block-start: 1.5rem;
                }
            }
        }
    }
    
    @media(max-width: 768px) {
        h2{
            font-size: 6rem;
        }
        .profile{
            .text{
                p{
                    font-size: .7rem;
                }
            }
        }
    }

    @media(max-width: 425px) {
        h2{
            margin-bottom: 1rem;
            justify-content: center;
        }
        .profile{
            flex-direction: column;
            .profile-img{
                width: 100%;
            }
            .text{
                width: 100%;
                p{
                    font-size: .8rem;
                    padding-block-start: 1rem;
                    /* line-height: 1.5; */
                }
            }
        }
    }
    @media(max-width: 320px) {
        h2{
            font-size: 5rem;
        }
    }
`

