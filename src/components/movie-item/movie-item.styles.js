import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieItem = styled(Link)`
  width: 30rem;
  height: 43rem;
  background-color: rgb(0, 0, 0, 0.8);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  color: white;
  margin: 0 3rem;
  margin-bottom: 3rem;
  text-decoration: none;
  border: 2px solid #787878;
`;

export const MovieItemImg = styled.div`
  display: block;
  width: 100%;
  height: 75%;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const MovieItemTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.9rem;
  width: 100%;
  height: 25%;
`;
