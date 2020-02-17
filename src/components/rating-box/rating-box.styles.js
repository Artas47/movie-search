import styled from "styled-components";

export const RatingBoxOuter = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    margin-top: 2rem;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 0.5rem;
  }
`;

export const RatingBoxInner = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 2px solid gold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RatingText = styled.span`
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const RatingNumber = styled.span`
  font-size: 2.3rem;
  @media only screen and (max-width: 800px) {
    font-size: 2.1rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.9rem;
  }
`;
export const RatingNumberSmall = styled.span`
  font-size: 1.5rem;
`;
export const RatingVotes = styled.span`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;
export const RatingVotesText = styled.span`
  font-size: 1.2rem;
`;
