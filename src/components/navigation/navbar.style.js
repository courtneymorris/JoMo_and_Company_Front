import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
  background: #dabfb7;
  height: 83px;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  border-bottom: 1px solid #e9ebeb;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #442b48;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &:hover {
    color: #b56576;
    font-weight: 700;
    transition: 0.5s ease-in-out;
  }

  &.active {
    color: #b56576;
    border-bottom: 3px solid #b56576;
    font-weight: 600;
  }
`;

export const LogoNavLink = styled(Link)`
  img {
    height: 60px;
    width: 100%;
  }
`;

export const Bars = styled(FontAwesomeIcon)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    color: #6d597a;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #355070;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: purple;
  }
`;
