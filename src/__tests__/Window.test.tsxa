import { render, fireEvent } from "@testing-library/react";
import Window from "../components/Window";
import renderer from "../test-renderer";

const onMinimize = jest.fn();
const onMaximize = jest.fn();
const onClose = jest.fn();
const onSubmit = jest.fn();
const onCancel = jest.fn();

describe("Components/Window", () => {
  it("Calls all the click handler", () => {
    const { getByTestId, getByText } = render(renderer(<Window
      title="Title"
      content="Content"
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onSubmit={onSubmit}
      submitText="Submit"
      onCancel={onCancel}
      cancelText="Cancel"
    />));

    expect(getByText(/title/i)).toBeInTheDocument();
    expect(getByText(/content/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
    expect(getByText(/cancel/i)).toBeInTheDocument();

    fireEvent.click(getByTestId("minimize-testid"));
    expect(onMinimize).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("maximize-testid"));
    expect(onMaximize).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("close-testid"));
    expect(onClose).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("submit-testid"));
    expect(onSubmit).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("cancel-testid"));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("Renders a single call to action", async () => {
    const { queryByTestId } = render(renderer(<Window
      title="Title"
      content="Content"
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onClose={onClose}
      onSubmit={onSubmit}
      submitText="Submit"
    />));

    const cancelButton = await queryByTestId("cancel-testid");
    expect(cancelButton).not.toBeInTheDocument();
  });
});
