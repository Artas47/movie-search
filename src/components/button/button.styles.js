import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 2rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid gold;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  align-self: center;
  transition: all 0.2s;
  outline: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
