import styled, { css } from "styled-components";
import { ReactComponent as Cancel } from "../../assets/cross.svg";

export const Modal = styled.div`
  width: ${props => (props.showSidebar ? "80%" : "100%")};
  position: absolute;
  background-color: blue;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    width: ${props => (props.showSidebar ? "70%" : "100%")};
  }
`;

export const ModalContent = styled.div`
  position: relative;
  margin-top: 3rem;
  color: white;
  z-index: 3;
  width: 110rem;
  height: 60rem;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  /* border: 3px solid #2f3540; */

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  @media only screen and (max-width: 1200px) {
    width: 85rem;
    margin-top: 0;
  }

  ${props =>
    !props.showSidebar &&
    css`
      @media only screen and (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
        width: 55rem;
        height: 60%;
      }
      @media only screen and (max-width: 450px) {
        width: 45rem;
        height: 75%;
      }
      @media only screen and (max-width: 350px) {
        width: 35rem;
        height: 50rem;
      }
    `}
  ${props =>
    props.showSidebar &&
    css`
      @media only screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55rem;
        height: 80%;
      }
      @media only screen and (max-width: 700px) {
        width: 45rem;
      }
    `}
`;

export const ModalImage = styled.img`
  display: ${props => (props.src === "N/A" ? "none" : "block")};
  align-self: flex-end;
  height: 107%;
  width: 100%;

  ${props =>
    props.showSidebar &&
    css`
      @media only screen and (max-width: 1000px) {
        height: 100%;
      }
      @media only screen and (max-width: 700px) {
        height: 50%;
      }
    `}
  ${props =>
    !props.showSidebar &&
    css`
      @media only screen and (max-width: 650px) {
        height: 65%;
      }
      @media only screen and (max-width: 450px) {
        height: 60%;
      }
      /* @media only screen and (max-width: 650px) {
        height: 100%;
      } */
    `}
    @media only screen and (max-height: 500px) {
    height: 30rem;
  }
`;

export const ModalDescription = styled.div`
  position: relative;
  padding: 3rem;
  background-color: #575757;
  width: 100%;
  height: 100%;
  /* @media only screen and (max-width: 1000px) {
    height: 60%;
  } */

  @media only screen and (max-width: 800px) {
    padding: 2rem;
  }
  @media only screen and (max-width: 600px) {
    padding: 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    padding: 1rem;
  }
  @media only screen and (max-height: 500px) {
    height: 100%;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  @media only screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ModalPlot = styled.p`
  font-size: 1.8rem;
  margin-top: 3rem;
  line-height: 1.8;
  @media only screen and (max-width: 800px) {
    margin-top: 2rem;
    font-size: 1.6rem;
    line-height: 1.6;
  }
  @media only screen and (max-width: 400px) {
    margin-top: 1rem;
    line-height: 1.4;
    font-size: 1.4rem;
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

export const ModalDetailsItem = styled.p`
  :not(:last-child) {
    margin-right: 4rem;
  }
`;

export const ModalCancel = styled(Cancel)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 2rem;
  height: 2rem;
  z-index: 999;
  cursor: pointer;
  fill: #fff;
`;
