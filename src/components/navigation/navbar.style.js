import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
  /* background: linear-gradient(to bottom, #463652, #745e82);
  backdrop-filter: blur(10px); */
  height: 83px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  /* border-bottom: 5px solid #745e82; */
  /* box-shadow: 0px 1px 5px 10px #745e82; */
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #ecdfeb;
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
    color: #d38e9d;
    border-bottom: 3px solid #b56576;
    font-weight: 600;
  }
`;

export const LogoNavLink = styled(Link)`
  img {
    height: 65px;
    width: 100%;
    padding-left: 10px;
  }
`;

export const Bars = styled(FontAwesomeIcon)`
  display: none;
  color: #ecdfeb;

  @media only screen and (min-width: 0) and (max-width: 820px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    &:active {
      color: #d38e9d;

      &.open {
        display: none;
        color: #d38e9d;
      }
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media only screen and (min-width: 0) and (max-width: 820px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media only screen and (min-width: 0) and (max-width: 820px) {
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
