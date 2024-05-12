import {render, screen} from "@testing-library/react";
import {describe, test} from "vitest";
import userEvent from "@testing-library/user-event";

import Button from "..";

describe("Button Component", () => {
  const user = userEvent.setup();

  test("renders correctly with enabled button and handles click", async () => {
    const handleClick = vi.fn();

    render(<Button context="context" handleClick={handleClick} isDisabled={false} />);

    const valueContext = screen.getByText("context");

    expect(valueContext).toBeDefined();

    await user.click(valueContext);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders correctly with disabled button and does not handle click", async () => {
    const handleClick = vi.fn();

    render(<Button context="context" handleClick={handleClick} isDisabled={true} />);

    const buttonElement = screen.getByText("context");

    expect(buttonElement).toBeDefined();

    expect(buttonElement.disabled).toBe(true);

    await user.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
