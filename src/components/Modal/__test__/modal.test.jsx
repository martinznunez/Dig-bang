import {render, screen, fireEvent} from "@testing-library/react";
import {describe, test} from "vitest";

import Modal from "..";

const onClose = vi.fn();

describe("Modal Component", () => {
  test("renders with content and closes on click", () => {
    const childContent = (
      <div>
        <p>Children Content</p>
      </div>
    );
    const FAKE_OPEN = true;

    render(
      <Modal isOpen={FAKE_OPEN} onClose={onClose}>
        {childContent}
      </Modal>,
    );

    const childElement = screen.getByText("Children Content");

    expect(childElement).toBeDefined();
    expect(childElement?.textContent).toBe("Children Content");

    const closeAction = screen.getByText("X");

    expect(closeAction).toBeDefined();

    fireEvent.click(closeAction);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
