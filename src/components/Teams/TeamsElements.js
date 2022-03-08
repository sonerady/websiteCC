import styled from 'styled-components'

export const ServicesContanier = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f9f9f9;

@media screen and (max-width: 768px){
    height: 2000px;
}

@media screen and (max-width: 480px){
    height: 2300px;
}

`
export const ServicesWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr ;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 170px;
    max-height: 900px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;


    &:hover{
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 300px;
    width: 300px;
    margin-bottom: 30px;
`

export const ServicesH1 = styled.h1`
    font-size: 4rem;
    color:#ECCB5B;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
color:red ;
    font-size: 3rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 2rem;
    text-align: center;
`
