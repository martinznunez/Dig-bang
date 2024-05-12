import {render, screen, waitFor, fireEvent, act} from "@testing-library/react";
import {describe, expect, test} from "vitest";

import {FieldType} from "../../CreditForm/types";
import CreditForm from "..";

describe("CreditForm Component", () => {
  test("renders Total  input correctly with corresponding label", () => {
    render(<CreditForm />);

    const totalAmountInput = screen.getByTestId(FieldType.Amount);

    expect(totalAmountInput).toBeDefined();

    const termInput = screen.getByTestId(FieldType.Term);

    expect(termInput).toBeDefined();
  });

  test("renders SliderComponent", () => {
    render(<CreditForm />);

    const sliders = screen.getAllByRole("slider");

    expect(sliders.length).toBe(2);

    expect(sliders[0].getAttribute("aria-valuemin")).toBe("5000");
    expect(sliders[0].getAttribute("aria-valuemax")).toBe("50000");

    expect(sliders[1].getAttribute("aria-valuemin")).toBe("3");
    expect(sliders[1].getAttribute("aria-valuemax")).toBe("24");
  });

  test("renders SliderComponent with correct values", async () => {
    render(<CreditForm />);

    const sliders = screen.getAllByRole("slider");

    expect(sliders.length).toBe(2);

    expect(sliders[0].getAttribute("aria-valuemin")).toBe("5000");
    expect(sliders[0].getAttribute("aria-valuemax")).toBe("50000");

    expect(sliders[1].getAttribute("aria-valuemin")).toBe("3");
    expect(sliders[1].getAttribute("aria-valuemax")).toBe("24");

    const totalAmountInput = screen.getByTestId(FieldType.Amount);
    const totalAmountValue = parseInt(totalAmountInput.value.trim().replace(/\$|\.|\s/g, ""));

    expect(parseInt(sliders[0].getAttribute("aria-valuemin"))).toBe(totalAmountValue);

    const termInput = screen.getByTestId(FieldType.Term);

    expect(parseInt(sliders[1].getAttribute("aria-valuemin"))).toBe(Number(termInput.value));
  });

  test("updates term input value when slider changes", async () => {
    render(<CreditForm />);

    const termSlider = screen.getAllByRole("slider");
    const termInput = screen.getByTestId(FieldType.Term);

    expect(termSlider[1].getAttribute("aria-valuemin")).toBe("3");
    expect(Number(termInput.value)).toBe(3);

    act(() => {
      fireEvent.change(termInput, {target: {value: 5}});
    });

    await waitFor(() => {
      expect(termInput.value).toBe("5");

      expect(termSlider[1].getAttribute("aria-valuenow")).toBe("5");
    });
  });
});
