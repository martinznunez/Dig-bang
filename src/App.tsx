import {useState} from "react";

import CardBody from "./components/CardBody";
import CreditForm from "./modules/CreditForm";
import Title from "./components/Title";
import ChildCard from "./components/ChildCard";
import {ContainerBody, ContainerChildCard, StyledWrapperRow} from "./modules/styled";
import {useCreditEase} from "./modules/CreditForm/context/CreditEase";
import Modal from "./components/Modal";
import SuccessCreditNotification from "./components/CreditSuccessNotification";
import CreditDetail from "./modules/CreditDetails";
import {
  REGULAR_INSTALLMENTS_TEXT,
  REGULAR_CREDIT_TEXT,
  REGULAR_CREDIT_TEXT_DETAIL,
} from "./constants";
import Button from "./components/Button";

function App() {
  const {detailCredit, isValid} = useCreditEase();

  const [isOpenSuccessCred, setIsOpenSuccessCred] = useState<boolean>(false);

  const [isOpenDetailCred, setIsOpenDetailCred] = useState<boolean>(false);

  return (
    <>
      <CardBody>
        <ContainerBody>
          <Title />
          <CreditForm />
          <ContainerChildCard>
            <ChildCard styled="wrapper_total_prices">
              <p>{REGULAR_INSTALLMENTS_TEXT} </p>
              {isValid ? (
                <strong> {detailCredit.credit} </strong>
              ) : (
                <span>Verifique sus montos</span>
              )}
            </ChildCard>
            <StyledWrapperRow>
              <ChildCard styled="wrapper_credit">
                <Button
                  context={REGULAR_CREDIT_TEXT}
                  handleClick={() => setIsOpenSuccessCred(true)}
                  isDisabled={!isValid}
                />
              </ChildCard>
              <ChildCard styled="wrapper_detail">
                <Button
                  context={REGULAR_CREDIT_TEXT_DETAIL}
                  handleClick={() => setIsOpenDetailCred(true)}
                  isDisabled={!isValid}
                />
              </ChildCard>
            </StyledWrapperRow>
          </ContainerChildCard>
        </ContainerBody>
      </CardBody>
      <Modal isOpen={isOpenSuccessCred} onClose={() => setIsOpenSuccessCred(false)}>
        <SuccessCreditNotification />
      </Modal>
      <Modal isOpen={isOpenDetailCred} onClose={() => setIsOpenDetailCred(false)}>
        <CreditDetail data={detailCredit} />
      </Modal>
    </>
  );
}

export default App;
