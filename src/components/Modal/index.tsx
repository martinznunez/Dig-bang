import React, {ReactNode} from "react";

import {ModalContent, ModalOverlay, ModalCloseButton} from "./styled";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <div className="modal-content">{children}</div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
