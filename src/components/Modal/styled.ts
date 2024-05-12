import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  position: relative;
  width: auto;
  height: auto;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 3px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  color: #000;
  font-size: 2rem;
  font-weight: 900;
`;
