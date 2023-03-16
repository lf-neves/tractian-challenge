import { ReactNode } from "react";
import { StyledTabContainer } from "./styled";

interface PanelContentProps {
  children?: ReactNode;
  index: number;
  value: number;
}

export const PanelContent: React.FC<PanelContentProps> = ({
  children,
  index,
  value,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <StyledTabContainer>{children}</StyledTabContainer>}
    </div>
  );
};
