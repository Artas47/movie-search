import styled from "styled-components";

export const Modal = styled.div`
  width: 80%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
`;

export const ModalContent = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  color: white;
  z-index: 3;
  width: 110rem;
  height: 60rem;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
`;

export const ModalImage = styled.img`
  display: block;
  align-self: flex-end;
  height: 107%;
  width: 70rem;
`;

export const ModalDescription = styled.div`
  padding: 3rem;
  background-color: #575757;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.h3`
  font-size: 3rem;
  font-weight: 500;
`;

export const ModalPlot = styled.p`
  font-size: 1.8rem;
  margin-top: 3rem;
  line-height: 1.8;
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
