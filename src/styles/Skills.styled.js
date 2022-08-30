import styled from 'styled-components';

export const StyledSkill = styled.div`
    margin-top: 4rem;
    h2{
        display: flex;
        align-items: center;
        justify-content: start;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.08);
        text-transform: uppercase;
        font-size: 10rem;
        margin-bottom: -3rem;
    }
    .text{
        color: var(--white);
        .skill-summary{
            width: 50%;
            padding-block-start: 2rem;
            line-height: 1.8;
            font-size: 1.1rem;
            margin-bottom: 3rem;
        }
        .skills{
            max-width: 100%;
            display: grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
            grid-template-rows: 1fr 1fr; 
            gap: 55% 2%; 
            grid-template-areas: 
                ". . . . ."
                ". . . . ."; 
            .skill{
                /* background-color: var(--blue); */
                /* display: flex;
                align-items: center;
                justify-content: center; */
                /* border-radius: 10px; */
                /* width: 20rem; */
            }
        }
    }
    @media(max-width: 1024px) {
        h2{
            font-size: 8rem;
        }
        .text{
            .skills{
                gap: 25% 5%;
            }
        }
    }

    @media(max-width: 768px) {
        h2{
            font-size: 6rem;
        }
        .text{
            .skill-summary{
                font-size: .8rem;
            }
            .skills{
                .skill{
                    font-size: .8rem;
                }
            }
        }
    }
    @media(max-width: 425px) {
        h2{
            font-size: 6rem;
            /* margin-bottom: .7rem; */
            justify-content: center;
        }
        .text{
            .skill-summary{
                width: 100%;
                margin-bottom: 2rem;
            }
            .skills{ 
                grid-template-columns: 1fr 1fr 1fr 1fr; 
                grid-template-rows: 1fr 1fr;  
                grid-template-areas: 
                    ". . . ."
                    ". . . ."; 
            }
        }
    }
    @media(max-width: 375px) {
        h2{
            font-size: 5rem;
        }
        .text{
            margin-top: 1rem;
            .skills{
                grid-template-columns: 1fr 1fr 1fr; 
                grid-template-rows: 1fr 1fr; 
                grid-template-areas: 
                    ". . ."
                    ". . ."; 
            }
        }
    }
`