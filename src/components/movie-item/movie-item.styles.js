import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieItem = styled(Link)`
  width: 30rem;
  height: 40rem;
  background-color: rgb(0, 0, 0, 0.8);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  color: white;
  margin: 0 3rem;
  margin-bottom: 3rem;
  text-decoration: none;
`;

export const MovieItemImg = styled.div`
  width: 100%;
  height: 80%;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

export const MovieItemTitle = styled.h1`
  margin-top: 2rem;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  word-wrap: break-word;
  text-align: center;
`;

export const MovieDescription = styled.p`
  font-size: 1.5rem;
  margin: 1.5rem 2rem;
  width: 100%;
  word-wrap: break-word;
  justify-self: center;
`;
