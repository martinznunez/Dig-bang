import {render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import ChildCard from "..";

describe("ChildCard Component", () => {
  test("renders correctly with children", () => {
    const buttonText = "Obtener Crédito";

    render(
      <ChildCard styled="wrapper_credit">
        <button>{buttonText}</button>
      </ChildCard>,
    );

    const buttonElement = screen.getByText(buttonText);

    expect(buttonElement).toBeDefined();

    const childCardElement = screen.getByTestId("styled-wrapper_credit");

    expect(childCardElement).toBeDefined();
  });
});
