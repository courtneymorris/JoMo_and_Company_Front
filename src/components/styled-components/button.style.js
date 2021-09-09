import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: hotpink;
  }

  &:active {
    border-bottom: 1px solid red;
  }
`;
