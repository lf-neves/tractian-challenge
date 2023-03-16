import { ReactNode } from "react";
import { StyledContainer } from "./styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
