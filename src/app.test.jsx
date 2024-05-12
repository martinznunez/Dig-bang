import React from "react";
import {render, screen, waitFor, act} from "@testing-library/react";
import {beforeEach, describe, expect, test} from "vitest";
import userEvent from "@testing-library/user-event";

import App from "./App";
import CreditEaseProvider from "./modules/CreditForm/context/CreditEase.tsx";
import {
  REGULAR_TITLE_SUCCESS_FULL,
  REGULAR_CREDIT_TEXT,
  REGULAR_CREDIT_TEXT_DETAIL,
  REGULAR_TITLE_DETAIL_PAYMENT,
} from "./constants";

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("opens and closes modal correctly", async () => {
    const user = userEvent.setup();
    const mockedContext = {
      detailCredit: {term: 3, amount: 5000, credit: "$ 1.666,67"},
      setDetailCredit: vi.fn(),
      isValid: true,
    };

    render(
      <CreditEaseProvider value={mockedContext}>
        <App />
      </CreditEaseProvider>,
    );

    const title = screen.getByText("Simulá tu crédito");

    expect(title).toBeDefined();

    const buttons = screen.getAllByRole("button");

    const getCreditButton = buttons.find((button) =>
      button.textContent.includes(REGULAR_CREDIT_TEXT),
    );

    await user.click(getCreditButton);

    expect(screen.getByText(REGULAR_TITLE_SUCCESS_FULL)).toBeDefined();

    const buttonCloseGetCredit = screen.getByText("X");

    expect(buttonCloseGetCredit).toBeDefined();

    await user.click(buttonCloseGetCredit);

    await waitFor(() => {
      expect(screen.queryByText(REGULAR_TITLE_SUCCESS_FULL)).toBeNull();
    });

    const getDetailButton = buttons.find((button) =>
      button.textContent.includes(REGULAR_CREDIT_TEXT_DETAIL),
    );

    await user.click(getDetailButton);

    const buttonClosePayment = screen.getByText("X");

    expect(screen.getByText(REGULAR_TITLE_DETAIL_PAYMENT)).toBeDefined();

    expect(buttonClosePayment).toBeDefined();

    await user.click(buttonClosePayment);

    await waitFor(() => {
      expect(screen.queryByText(REGULAR_TITLE_DETAIL_PAYMENT)).toBeNull();
    });
  });

  test("disables button when input value is entered", async () => {
    const user = userEvent.setup();
    const mockedContext = {
      detailCredit: {term: "3", amount: "0", credit: "0"},
      setDetailCredit: vi.fn(),
      isValid: false,
    };

    render(
      <CreditEaseProvider value={mockedContext}>
        <App />
      </CreditEaseProvider>,
    );

    const inputElement = screen.getByTestId("amount");

    expect(inputElement).toBeDefined();

    await act(async () => {
      await user.type(inputElement, "200");
    });

    const buttons = screen.getAllByRole("button");
    const getDetailButton = buttons.find((button) =>
      button.textContent.includes(REGULAR_CREDIT_TEXT),
    );

    expect(getDetailButton.disabled).toBe(true);
  });
});
