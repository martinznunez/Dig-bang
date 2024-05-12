import {render, screen} from "@testing-library/react";
import {describe, test} from "vitest";

import CardBody from "..";

describe("Card Component", () => {
  test("renders correctly with 'Content'", () => {
    const childContent = (
      <div>
        <span>Child Content</span>
      </div>
    );

    render(<CardBody>{childContent}</CardBody>);

    const childElement = screen.getByText("Child Content");

    expect(childElement).toBeDefined();

    expect(childElement).toBeDefined();
    expect(childElement?.textContent).toBe("Child Content");
  });
});
