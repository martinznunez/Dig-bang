import {useEffect, useState} from "react";

import {config} from "../../../constants";
import {calculateMonthlyPayment} from "../../utils/formatPrices";
import {FieldType} from "../../CreditForm/types";
import {useCreditEase} from "../context/CreditEase";

const {MAX_TERM, MAX_CREDIT_AMOUNT, DEFAULT_CREDIT_AMOUNT_STATE, DEFAULT_TERM_STATE} = config;

export const useCreditForm = () => {
  const [creditAmount, setCreditAmount] = useState<string>(DEFAULT_CREDIT_AMOUNT_STATE);

  const [valueTerm, setValueTerm] = useState<string>(DEFAULT_TERM_STATE);

  const {setDetailCredit} = useCreditEase();

  useEffect(() => {
    const monthlyPayment = calculateMonthlyPayment(creditAmount, valueTerm);

    setDetailCredit({term: valueTerm, amount: creditAmount, credit: monthlyPayment});
  }, [creditAmount, setDetailCredit, valueTerm]);

  const handleChange = (name: string, value: string) => {
    if (name === FieldType.Amount) handleChangeAmount(value);
    if (name === FieldType.Term) handleChangeTerm(value);
  };

  const handleChangeAmount = (value: string) => {
    const newValue = value === "" ? "0" : String(Math.min(Number(value), MAX_CREDIT_AMOUNT));

    setCreditAmount(newValue);
  };

  const handleChangeTerm = (value: string) => {
    const newValue = value === "" ? "0" : String(Math.min(Number(value), MAX_TERM));

    setValueTerm(newValue);
  };

  return {
    creditAmount,
    valueTerm,
    handleChange,
    calculateMonthlyPayment,
  };
};
