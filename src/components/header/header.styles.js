import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: ${({ showSidebar }) => (showSidebar ? "80%" : "100%")};
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  font-size: 3rem;
  padding: 7rem 0;
  background-color: rgba(0, 0, 0, 0.35);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid #303c52;
  @media only screen and (max-width: 1000px) {
    width: ${({ showSidebar }) => (showSidebar ? "70%" : "100%")};
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const LogoPNG = styled.img`
  position: absolute;
  left: 1rem;
  @media only screen and (max-width: 1000px) {
    width: 17rem;
  }
  @media only screen and (max-width: 900px) {
    width: 15rem;
  }
  @media only screen and (max-width: 850px) {
    top: -4.5rem;
    left: -1rem;
  }
`;
