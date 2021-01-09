import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    font-family: 'Rubic';

    ${'' /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;

    } */}
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width:768px){
    margin-bottom: 0px;
    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:768px){
    margin-bottom: 0px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    @media screen and (max-width:768px){
        padding-bottom: 10px;
    }
    @media screen and (max-width:480px){
        padding-bottom: 10px;
    }
`

export const TopLine = styled.p`
    color: #f7f8fa;
    font-size: 48px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 50px;

    @media screen and (max-width: 768px){
        font-size: 40px;
        margin-bottom: 30px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
        margin-bottom: 30px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color:#f7f8fa;
    line-height: 50px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 30px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
        line-height: 25px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgBorder = styled.div`
    background: black;
    height: 400px;
    width: 320px;
    border-radius: 25px;
`

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`;

export const Img = styled.img`
    width: 300px;
    height:100%; 
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 25px;
`;