import {FaBars} from 'react-icons/fa';
import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components'

//Exporting a styled nav component with preset style
export const Nav = styled.nav`
    background: #666666;
    height: 85px;
    display: flex;
    justify-content" space-between;
    padding: 0.2rem calc((100vw - 1000px) /2);
    z-index:12;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        color #000000;
    }
`;


export const Bars = styled(FaBars)`
    color: #808080;
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        postition: absolute;
        top: 0;
        right: 0;
        transform: translate( -100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px; 
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    } 
`;

//Link inside a nav button (Not a tab)
export const NavBtnLink = styled(Link)`
    background: #635630;
    color: #000002;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
    border-radius: 4px;
    
`;
