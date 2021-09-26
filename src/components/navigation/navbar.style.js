import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.nav`
  height: 83px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
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
    color: #e7b6c1;
    font-weight: 700;
    transition: all 0.2s ease-in;
    transform: scale(1.2);
  }

  &.active {
    color: #eba4b3;
    border-bottom: 3px solid #b56576;
    font-weight: 600;
    transform: scale(1.1);
  }
`;

export const LogoNavLink = styled(Link)`
  img {
    height: 65px;
    width: 100%;
    padding-left: 10px;
    object-fit: cover;

    &:hover {
      transition: all 0.2s ease;
      transform: scale(1.1);
    }

    @media only screen and (min-width: 0) and (max-width: 350px) {
      height: 45px;
      margin-top: 15px;
      object-fit: cover;
    }
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
  font-family: "Lobster Two", cursive;
  padding: 10px 22px;
  color: #caa6ab;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 1px 1px 5px 0px rgba(53, 80, 112, 0.59);

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
    /* background: #caa6ab; */
    color: #355070;
    background-image: linear-gradient(315deg, #eed8e7 0%, #e9a6cb 74%);
    box-shadow: -1px -1px 20px 0px #ecc8e6, -4px -4px 5px 0px #f0cada,
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
