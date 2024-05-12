export const formatPrice = (value: string | number, includeDecimals?: boolean): string => {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numericValue) || numericValue < 0) {
    return new Intl.NumberFormat("es-AR", {
      currency: "ARS",
      style: "currency",
      maximumFractionDigits: includeDecimals ? 2 : 0,
    }).format(0);
  }

  return new Intl.NumberFormat("es-AR", {
    currency: "ARS",
    style: "currency",
    maximumFractionDigits: includeDecimals ? 2 : 0,
  }).format(numericValue);
};

export const calculateMonthlyPayment = (creditAmount: string, valueTerm: string): string => {
  const values = Number(creditAmount) / Number(valueTerm);

  const includeDecimals = true;

  return formatPrice(values, includeDecimals);
};
