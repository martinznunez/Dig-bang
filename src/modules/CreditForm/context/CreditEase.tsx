import React, {createContext, useContext, useMemo, useState} from "react";

import {config} from "../../../constants";
const {DEFAULT_CREDIT_AMOUNT, DEFAULT_CREDIT_AMOUNT_STATE, DEFAULT_TERM_STATE, DEFAULT_TERM} =
  config;

interface CreditEaseContextType {
  detailCredit: {term: string; amount: string; credit: string};
  isValid: boolean;
  setDetailCredit: (_value: {term: string; amount: string; credit: string}) => void;
}
export const CreditEase = createContext<CreditEaseContextType>({
  detailCredit: {term: "0", amount: "0", credit: ""},
  isValid: true,

  setDetailCredit: (_value: {term: string; amount: string}) => {},
});
interface UseProviderProps {
  children: React.ReactNode;
}

const CreditEaseProvider: React.FC<UseProviderProps> = ({children}) => {
  const [detailCredit, setDetailCredit] = useState<{
    term: string;
    amount: string;
    credit: string;
  }>({
    term: DEFAULT_TERM_STATE,
    amount: DEFAULT_CREDIT_AMOUNT_STATE,
    credit: "",
  });

  const isValid =
    Number(detailCredit.amount) >= DEFAULT_CREDIT_AMOUNT &&
    Number(detailCredit.term) >= DEFAULT_TERM;
  const value = useMemo(
    () => ({
      detailCredit,
      setDetailCredit,
      isValid,
    }),
    [detailCredit, isValid],
  );

  return <CreditEase.Provider value={value}>{children}</CreditEase.Provider>;
};

export const useCreditEase = () => {
  const context = useContext(CreditEase);

  if (!context) {
    throw new Error(" CreditEase must be used inside a CreditEaseProvider");
  }

  return context;
};

export default CreditEaseProvider;
