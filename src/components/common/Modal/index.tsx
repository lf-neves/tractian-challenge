import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import MuiModal from "@mui/material/Modal";
import { StyledModalContainer } from "./styled";
import { Box } from "@mui/material";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText: string;
  children: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
}

export const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  buttonText,
  children,
  buttonVariant = "text",
}) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ maxHeight: 1200 }}>
      <Button onClick={handleOpen} variant={buttonVariant}>
        {buttonText}
      </Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContainer>{children}</StyledModalContainer>
      </MuiModal>
    </Box>
  );
};
