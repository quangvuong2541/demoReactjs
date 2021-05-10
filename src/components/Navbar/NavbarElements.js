import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GoSmiley } from 'react-icons/go';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const H1 = styled.h1`
    color: yellow;
    opacity: 0.6;
    border : 5px solid red;
    border-radius : 10%;
  background-color: #c53035 ;
`;


export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(GoSmiley)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;


