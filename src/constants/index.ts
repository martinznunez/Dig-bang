export const REGULAR_INSTALLMENTS_TEXT = "Cuotas fija por mes";

export const REGULAR_CREDIT_TEXT = "Obtener Credito";
export const REGULAR_CREDIT_TEXT_DETAIL = "Ver detalles de cuotas";
export const REGULAR_TITLE_DETAIL_PAYMENT = "Detalles de Cuotas a Pagar";
export const REGULAR_TITLE_SUCCESS_FULL = "¡Crédito otorgado con éxito!";
export const TOTAL_AMOUNT = "Monto total";
export const TERM = "Plazo";

const DEFAULT_CREDIT_AMOUNT = 5000;
const DEFAULT_TERM = 3;

export const config = {
  MAX_TERM: 24,
  MAX_CREDIT_AMOUNT: 50000,
  DEFAULT_TERM,
  DEFAULT_CREDIT_AMOUNT,
  DEFAULT_CREDIT_AMOUNT_STATE: String(DEFAULT_CREDIT_AMOUNT),
  DEFAULT_TERM_STATE: String(DEFAULT_TERM),
};
