import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  font-size: 3rem;
  padding: 7rem 0;
`;

export const Input = styled.input`
  border: 0;
  border-bottom: 1px solid darkgray;
  background-color: transparent;
  font-size: 3rem;
  padding: 0.1rem;
  color: #cbd0d6;
  width: 53rem;
  height: 5rem;
  text-decoration: none;
  display: flex;
  transition: all 0.2s;
  position: relative;
  ::placeholder {
    color: rgb(#cbd0d6, 0.3);
    font-size: 2.5rem;
  }

  :focus {
    outline: none;
    width: 56rem;
    border-bottom: 1px solid #438bf0;
  }
  :after {
    content: "Search";
    height: 100px;
    width: 100px;
    color: white;
  }
`;
