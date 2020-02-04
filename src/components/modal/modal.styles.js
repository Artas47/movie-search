import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
`;

export const ModalContent = styled.div`
  margin: 0 auto;
  color: white;
  z-index: 3;
  width: 90rem;
  height: 60rem;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
`;

export const ModalImage = styled.img`
  display: block;
  height: 100%;
  width: 70rem;
`;

export const ModalDescription = styled.div`
  padding: 2rem;
  background-color: red;
  width: 100%;
  height: 100%;
`;

export const ModalTitle = styled.h3`
  font-size: 3rem;
`;

export const ModalPlot = styled.p`
  font-size: 1.8rem;
`;
