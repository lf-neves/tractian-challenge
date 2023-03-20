import * as React from "react";
import Button from "@mui/material/Button";
import MuiModal from "@mui/material/Modal";
import { StyledModalContainer } from "./styled";

interface ModalProps {
  buttonText: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ buttonText, children }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{buttonText}</Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContainer>{children}</StyledModalContainer>
      </MuiModal>
    </div>
  );
};
