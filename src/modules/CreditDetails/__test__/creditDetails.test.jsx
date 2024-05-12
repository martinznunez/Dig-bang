import {render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import {REGULAR_TITLE_DETAIL_PAYMENT} from "../../../constants";
import CreditDetail from "..";

describe("CreditDetail Component", () => {
  const FAKE_DATA = {
    term: 2,
    amount: 1000,
    credit: "$500",
  };

  test("renders correctly title", () => {
    render(<CreditDetail data={FAKE_DATA} />);

    expect(screen.getByText(REGULAR_TITLE_DETAIL_PAYMENT)).toBeDefined();
  });

  test("renders correct number of list items", () => {
    render(<CreditDetail data={FAKE_DATA} />);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(FAKE_DATA.term);
    expect(listItems.length).toBe(2);
  });

  test("renders correct text content for each list item", () => {
    render(<CreditDetail data={FAKE_DATA} />);
    const listItems = screen.getAllByRole("listitem");

    listItems.forEach((item, index) => {
      expect(item.textContent).toEqual(`Cuota ${index + 1}${FAKE_DATA.credit}`);
    });
  });
});
