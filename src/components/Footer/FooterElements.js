import styled from "styled-components";
import footerBg from "../../images/footerBg1.jpg";

export const FooterContainer = styled.footer`
    ${'' /* background-color: #101522; */}
    font-family: 'Rubic';
    background-image: url(${footerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${'' /* opacity: 0.8; */}
    ${'' /* object-fit: cover;
    -o-object-fit: cover; */}
`
export const FooterTitle = styled.div`
    color: #fff;
    ${'' /* background: green; */}
    text-decoration: none;
    font-size: 2.5rem;
    align-items: center;
    margin-top: 50px;
    font-weight: bold;
`

export const FooterWrap = styled.div`
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: center; */}
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    height: 510px;  
`
export const FooterWrapper = styled.div`
    height: 275px;
    display: flex;
    justify-content: space-between;
    color: #000;

    @media screen and (max-width: 480px) {  
        width: 350px;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled.div`
    color: #fff;
    justify-self: start;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-family: "Rubic";
`
export const WebsiteRight = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    justify-content: center;
    width: 240px;
`
export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    margin-right: 20px;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        color: #8c34eb;
        
    }
`
export const SocialIconLink2 = styled.a`
    color: #fff;
    font-size: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        color: #8c34eb;
 
    }
`
export const FooterTransBox = styled.div`
    margin: 20px;
    background-color: #000;
    border: 1px solid #fff;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width:300px;
    color: #fff;
    border-radius: 25px 25px 25px 25px;

   @media screen and (max-width:480px){
        width: 250px;
        margin: 10px;
        height: 200px;
    }
`
export const FooterTransBox2 = styled.div`
    margin: 0px;
    width: 300px;
`

export const FooterBox = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    color: #fff;
    ${'' /* clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%); */}
    background: #000;
    opacity: 0.8;
    justify-content: center;
    height: 125px;
    align-items: center;
    border-radius: 25px 25px 25px 25px;
    border: 1px solid #fff;

    @media screen and (max-width:480px){
        width: 150px;
        margin: 10px;
        height: 100px;
    }
`
export const FooterBox2 = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    color: #fff;
    ${'' /* clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%); */}
    background: #000;
    opacity: 0.8;
    justify-content: center;
    height: 85px;
    align-items: center;
    border-radius: 25px 25px 25px 25px;
    border: 1px solid #fff;

    @media screen and (max-width:480px){
        width: 150px;
        margin: 10px;
    }
`
export const TextBox = styled.h1`
    font-size: 2rem;
    margin-top: 20px;
    margin-left: 10px;

    @media screen and (max-width: 480px){
        font-size: 1.5rem;
    }
`

export const TransBoxText = styled.h3`
    font-size: 1rem;
    margin-left: 10px;
    margin-top: 20px;
    @media screen and (max-width:480px){
        font-size: 0.7rem;
        margin-top: 7.5px;
        margin-left: 5px;
    }
`
export const DataIcons = styled.div`
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;

    @media screen and (max-width:480px){
        font-size: 15px;
        margin-top: 0px;
    }
`
export const DataWrap = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
`