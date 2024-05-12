import {useState} from "react";

import Input from "../../components/Input";
import SliderComponent from "../../components/SliderComponent";
import {TOTAL_AMOUNT, TERM} from "../../constants";
import {ContainerFormControlled, WrapperDetail} from "../styled";
import {formatPrice} from "../utils/formatPrices";

import {FieldType, RangeData} from "./types";
import {useCreditForm} from "./hooks/useCreditForm";
const rangeDataPrices: RangeData = {
  min: 5000,
  max: 50000,
};

const rangeDataTerm: RangeData = {
  min: 3,
  max: 24,
};

const CreditForm = () => {
  const [isEditing, setEditing] = useState<boolean>(false);

  const {creditAmount, valueTerm, handleChange} = useCreditForm();

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <>
      <ContainerFormControlled>
        <WrapperDetail>
          <p>{TOTAL_AMOUNT}</p>
          <div>
            <Input
              handleChange={handleChange}
              isEditing={isEditing}
              name={FieldType.Amount}
              toggleEditing={toggleEditing}
              value={isEditing ? creditAmount : formatPrice(creditAmount)}
            />
          </div>
        </WrapperDetail>
        <SliderComponent
          handleChangeRange={handleChange}
          name={FieldType.Amount}
          range={rangeDataPrices}
          value={Number(creditAmount)}
        />
      </ContainerFormControlled>
      <ContainerFormControlled>
        <WrapperDetail>
          <p>{TERM}</p>
          <div>
            <Input handleChange={handleChange} name={FieldType.Term} value={valueTerm.toString()} />
          </div>
        </WrapperDetail>
        <SliderComponent
          handleChangeRange={handleChange}
          name={FieldType.Term}
          range={rangeDataTerm}
          value={Number(valueTerm)}
        />
      </ContainerFormControlled>
    </>
  );
};

export default CreditForm;
