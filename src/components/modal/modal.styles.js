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
  width: 70rem;
  height: 80rem;
  background-color: rgba(0, 0, 0, 0.95);
`;
