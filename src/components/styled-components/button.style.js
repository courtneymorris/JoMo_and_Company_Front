import styled from "styled-components";

export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  margin: 1px;
  background-color: #caa6ab;
  color: #344e6f;
  font-family: "Lobster Two", "cursive";
  font-size: 2rem;
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 2px 5px 6px -2px rgba(0, 0, 0, 0.61);

  &:hover {
    background-color: #b56576;
  }

  &:active {
    background-color: #b8586c;
  }

  @media only screen and (min-width: 0) and (max-width: 400px) {
    width: 80px;
    height: 40px;
    font-size: 15px;
    font-weight: 700;
  }

  @media only screen and (min-width: 400px) and (max-width: 500px) {
    width: 90px;
    height: 43px;
    font-size: 18px;
    font-weight: 700;
  }

  @media only screen and (min-width: 500px) and (max-width: 700px) {
    width: 100px;
    height: 45px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;
