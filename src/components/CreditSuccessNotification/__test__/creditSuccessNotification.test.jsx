import {render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import {REGULAR_TITLE_SUCCESS_FULL} from "../../../constants";
import CreditSuccessNotification from "..";

describe("CreditSuccessNotification Component", () => {
  test("renders correctly with children ", () => {
    render(<CreditSuccessNotification />);

    const successMessage = screen.getByText(REGULAR_TITLE_SUCCESS_FULL);

    expect(successMessage).toBeDefined();
  });
});
