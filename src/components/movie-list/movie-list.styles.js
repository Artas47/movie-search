import styled from "styled-components";

export const MovieList = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-right: 40rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1200px) {
    margin-right: 30rem;
  }
  @media only screen and (max-width: 650px) {
    margin-right: 0;
  }
`;
