import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import MuiModal from "@mui/material/Modal";
import { StyledModalContainer } from "./styled";
import { Box } from "@mui/material";

interface ModalProps {
  buttonText: string;
  children: React.ReactNode;
  buttonVariant?: ButtonProps["variant"];
}

export const Modal: React.FC<ModalProps> = ({
  buttonText,
  children,
  buttonVariant = "text",
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
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
