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

`;


export const Bars = styled(FaBars)`
    color: #808080;
    
`;

export const NavMenu = styled.div`
    color: #808919;
    display: flex;
    align-items: center;
    margin-right: 24px; 
    
`;

export const NavBtn = styled.nav`
    color: #808080;
    display: flex;
    align-items: center;
    margin-right: 24px; 
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
