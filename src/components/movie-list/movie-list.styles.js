import styled from "styled-components";

export const MovieList = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  z-index: 2;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #3f4b5c;
    margin: 1rem 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737e94;
  }
`;
