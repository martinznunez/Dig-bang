import React from "react";

import {REGULAR_TITLE_DETAIL_PAYMENT} from "../../constants";
import {Installment} from "../CreditForm/types";

import {Container, ItemLabel, ItemValue, List, ListItem, Title} from "./styled";

interface PropsData {
  data: Installment;
}

const CreditDetail: React.FC<PropsData> = ({data}) => {
  const {term, credit} = data;

  const termArray = Array.from({length: Number(term)}, (_, index) => index + 1);

  return (
    <Container>
      <Title>{REGULAR_TITLE_DETAIL_PAYMENT}</Title>
      <List>
        {termArray.map((termNumber) => (
          <ListItem key={termNumber}>
            <ItemLabel>Cuota {termNumber}</ItemLabel>
            <ItemValue>{credit}</ItemValue>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CreditDetail;
