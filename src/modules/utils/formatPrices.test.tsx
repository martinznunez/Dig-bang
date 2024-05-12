import {formatPrice} from "./formatPrices";

describe("formatPrice function", () => {
  test("should return formatted price for positive number", () => {
    const result = formatPrice(1000);

    expect(result).toBe("$ 1.000");
  });

  test("should return formatted price for negative number", () => {
    const result = formatPrice(-500);

    expect(result).toBe("$ 0");
  });

  test("should return formatted price for string representation of number", () => {
    const result = formatPrice("1500");

    expect(result).toBe("$ 1.500");
  });

  test("should return formatted price with decimals if includeDecimals is true", () => {
    const result = formatPrice(2500, true);

    expect(result).toBe("$ 2.500,00");
  });

  test("should return formatted price without decimals if includeDecimals is false", () => {
    const result = formatPrice(3000, false);

    expect(result).toBe("$ 3.000");
  });

  test("should return formatted price for NaN input", () => {
    const result = formatPrice("abc");

    expect(result).toBe("$ 0");
  });
});
