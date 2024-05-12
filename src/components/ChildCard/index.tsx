import React from "react";

import {StyledChildCard, styles} from "./styled";

interface PropsChildCard {
  children: React.ReactNode;
  styled: keyof typeof styles;
  className?: string;
}

const ChildCard: React.FC<PropsChildCard> = ({children, styled, className}) => {
  return (
    <StyledChildCard className={className} data-testid={`styled-${styled}`} styled={styled}>
      {children}
    </StyledChildCard>
  );
};

export default ChildCard;
