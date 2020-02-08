import styled from "styled-components";

export const RatingBoxOuter = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;
export const RatingNumber = styled.span`
  font-size: 2.3rem;
`;
export const RatingNumberSmall = styled.span`
  font-size: 1.5rem;
`;
export const RatingVotes = styled.span`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;
