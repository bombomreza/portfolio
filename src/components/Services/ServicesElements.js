import styled from "styled-components";
import imageback from "../../images/bg2.jpg";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Rubic';
    background-image: url(${imageback});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${'' /* opacity: 0.8; */}
    object-fit: cover;
    -o-object-fit: cover;
    ${'' /* margin-bottom: 20px; */}

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
// export const ServiceBg = styled.div`
//     position: relative;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// `
// export const ImageBg = styled.img`
//     width: 100%;
//     height: 100%;
//     -o-object-fit: cover;
//     object-fit: cover;
//     background: #232a34;
        
// `
export const TransBox = styled.div`
    margin: 30px;
    background-color: #ffffff;
    border: 1px solid black;
    opacity: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    text-align: center;

    @media screen and (max-width: 1000px) {
        height: 1000px;
        ${'' /* margin-top: 200px; */}
        
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
        margin-top: 50px;
    }   
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        margin-bottom: 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff6ea;
    display: flex;
    ${'' /* opacity: 0.9; */}
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesIcon =  styled.img`
    height: 125px;
    width: 125px;
    margin-bottom: 5px;
    background: #fff6ea;

    @media screen and (max-width: 768px) {
        height: 100px;
        width: 100px;
        margin-bottom: 0px;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`
export const ServicesH4 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
    margin-left: -800px;
    font-family: 'Rubic';
    
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-left:-550px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        margin-left:-300px;
    };
    @media screen and (max-width: 420px) {
        font-size: 1.5rem;
        margin-left:-200px;
    };
`
export const ServicesH3 = styled.h3`
    font-size: 1.1rem;
    color: #000;
    margin-bottom: 10px;
    margin-left: 150px;
    margin-right: 150px;
    line-height: 1.5;
    max-width: 850px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        margin-left:10px;
        margin-right: 10px;

    }
    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
        margin-left:10px;
        margin-right: 10px;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #000;
    font-family: 'Rubic';
`

export const ServicesP = styled.p`
    font-size: 1 rem;
    text-align: center;
    line-height: 1.5;
    color: #000;
`
export const Underline = styled.div`
    text-decoration: none;
    padding: 0 1rem;
    width: 150px;
    border-bottom: 5px solid #8c34eb;
    margin-bottom: 30px;
    margin-left: -800px;
    border-radius: 50px 50px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-left:-550px;
        width: 100px;
        margin-bottom: 10px;
    }
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        margin-left:-300px;
    };
    @media screen and (max-width: 420px) {
        font-size: 1.5rem;
        margin-left:-200px;
    };
`