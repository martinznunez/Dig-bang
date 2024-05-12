import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import {describe, expect, test} from "vitest";

import {TOTAL_AMOUNT} from "../../../constants";
import {FieldType} from "../../../modules/CreditForm/types";
import Input from "..";
const handleChange = vi.fn();
const toggleEditing = vi.fn();

describe("Input Component", () => {
  test("renders correctly with type text and calls handleChange function on input change", () => {
    render(
      <Input
        handleChange={handleChange}
        isEditing={false}
        name={FieldType.Amount}
        toggleEditing={toggleEditing}
        value="value"
      />,
    );

    const inputElement = screen.getByRole("textbox", {Name: FieldType.Amount});

    expect(inputElement).toBeDefined();

    fireEvent.change(inputElement, {target: {value: "32"}});

    expect(handleChange).toHaveBeenCalledWith(FieldType.Amount, "32");
  });

  test("calls toggleEditing when input is focused", async () => {
    render(
      <Input
        handleChange={handleChange}
        isEditing={false}
        name={TOTAL_AMOUNT}
        toggleEditing={toggleEditing}
        value="value"
      />,
    );

    const inputElement = screen.getByRole("textbox", {Name: FieldType.Amount});

    expect(inputElement).toBeDefined();

    act(() => {
      fireEvent.focus(inputElement);
    });

    await waitFor(() => {
      expect(toggleEditing).toHaveBeenCalledTimes(1);
    });
  });
});
