import {ReactNode} from "react";

import {WrapperBody, WrapperCard} from "./styled";

interface PropsCard {
  children: ReactNode;
}

const CardBody: React.FC<PropsCard> = ({children}) => {
  return (
    <WrapperBody data-testid="wrapper-body">
      <WrapperCard>{children}</WrapperCard>
    </WrapperBody>
  );
};

export default CardBody;
