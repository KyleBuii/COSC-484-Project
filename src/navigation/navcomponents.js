import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

// Exporting a styled nav component with preset style
export const Nav = styled.nav`
  background: #1c3144;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center; // Center the content vertically
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color: gray;
  }
  &:hover {
    color: #d4d4d4;
  }
`;

export const Bars = styled(FaBars)`
  color: #808080;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width:768px){
    display: none;
  }
`;

export const NavAuth = styled.div`
  display: flex;
  align-items: stretch;
  @media screen and (max-width: 768px){
    display: none;
  }

`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-left:30px;
  @media screen and (max-width:768px){
    display: none;
  }
`;

// Link inside a nav button (Not a tab)
export const NavBtnLink = styled(Link)`
  background: white;
  color: #000000;
  padding: 10px 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d4d4d4;
  }
  border-radius: 4px;
`;


