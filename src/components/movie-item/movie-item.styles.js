import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../assets/star-full.svg";

export const MovieItem = styled(Link)`
  width: 30rem;
  height: 43rem;
  background-color: rgb(0, 0, 0, 0.8);
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  color: white;
  margin: 0 3rem;

  margin-bottom: 4rem;
  text-decoration: none;
  border: 2px solid #787878;
  position: relative;
  @media only screen and (max-width: 1500px) {
    flex-grow: 0.3;
  }
`;

export const MovieItemImg = styled.div`
  display: block;
  width: 100%;
  height: 70%;
  z-index: 3;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
`;

export const MovieItemDescBox = styled.div`
  width: 100%;
  height: 30%;
  cursor: default;
`;

export const MovieItemTitle = styled.h1`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.9rem;
  width: 100%;
  height: 80%;
`;

export const MovieStar = styled(Star)`
  position: absolute;
  width: 5rem;
  height: 5rem;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 45%);
  z-index: 5;
  fill: ${props => (props.isFav ? "gold" : "grey")};
`;
