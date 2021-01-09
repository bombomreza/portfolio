import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : '#000')};
    height: 60px;
    ${'' /* margin-top: -60px; */}
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    font-family: 'Rubic';

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-weight: bold;
    text-decoration: none;
    ${'' /* data-z-event: pointer;
    data-z-eventRotation: 60deg; */}
    ${'' /* transform: rotateY(-15deg);
    transition: transform 1s; */}
    ${'' /* font-family: 'rubic' */}
    
`;
export const NavCircle = styled.div`
    background: #8c34eb;
    width: 7.5px;
    height: 7.5px;
    border-radius: 50%;
    margin: 0 5px 0 5px
    ${'' /* position: absolute; */}
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 54px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #8c34eb;
        border-radius: 50%; 
    }
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        color: #8c34eb;
        
    }
        ${'' /* &:hover {
        transition: 0.2s ease-in-out;
    } */}
`
export const NavBarIcon =  styled.img`
    height: 65px;
    width: 75px;
    margin-bottom: 5px;
    ${'' /* background: #fff6ea; */}

    @media screen and (max-width: 768px) {
        height: 60px;
        width: 60px;
        margin-bottom: 0px;
    }
`