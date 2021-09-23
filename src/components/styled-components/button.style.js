import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
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
    border-bottom: 1px solid red;
  }
`;
