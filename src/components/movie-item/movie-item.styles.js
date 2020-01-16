import styled from "styled-components";

export const MovieItem = styled.div`
  width: 70%;
  height: 20rem;
  background-color: rgb(0, 0, 0, 0.8);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  color: white;
`;

export const MovieItemImg = styled.img`
  width: 30rem;
  height: 100%;
`;

export const MovieItemTitle = styled.h1`
  font-size: 3rem;
  margin-left: 5rem;
`;
