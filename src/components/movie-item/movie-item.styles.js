import styled, { css } from "styled-components";
export const MovieButtonContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all 0.2s;
`;
export const MovieItemImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  z-index: 3;
  background-color: black;
  ${({ src }) =>
    src &&
    css`
      background-image: ${props => `url(${props.src})`};
      background-size: cover;
      background-position: top;
    `}

  overflow: hidden;
  transition: all 0.2s;
`;
export const MovieItem = styled.div`
  width: 30rem;
  height: 43rem;
  box-shadow: 0 1rem 2rem rgb(0, 0, 0, 0.9);
  color: white;
  margin: 0 2rem;
  margin-bottom: 3rem;
  text-decoration: none;
  border: 2px solid #2f3540;
  position: relative;
  cursor: default;
  border-radius: 1rem;
  overflow: hidden;
  @media only screen and (max-width: 1500px) {
    flex-grow: 0.3;
  }
  :hover ${MovieButtonContainer} {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  :hover ${MovieItemImg} {
    filter: brightness(0.2);
  }
`;

export const MovieItemDescBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  ${props =>
    props.isfav &&
    css`
      background: linear-gradient(
        0deg,
        rgba(46, 41, 144, 1) 0%,
        rgba(65, 122, 191, 0.5914740896358543) 6%,
        rgba(66, 82, 218, 0) 8%
      );
    `};
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MovieItemTitle = styled.h1`
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.9rem;
  font-weight: 500;
  width: 90%;
  height: 80%;
`;

export const MovieButton = styled.button`
  width: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  height: 4rem;
  border: 1px solid white;
  background-color: transparent;
  color: #fff;
  transition: all 0.2s;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;
