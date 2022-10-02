import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import renderer from "../test-renderer";

const onClick = jest.fn();

describe("Components/Button", () => {
  it("Calls the onClick handler", () => {
    const { getByTestId } = render(renderer(<Button text="Content" onClick={onClick} />));
    fireEvent.click(getByTestId("button-testid"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
