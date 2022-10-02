import { render, fireEvent } from "@testing-library/react";
import IconButton from "./IconButton";
import iconHelp from "../icons/icon-help.svg";
import renderer from "../test-renderer";

const onClick = jest.fn();

describe("Components/IconButton", () => {
  it("Calls the onClick handler", () => {
    const { getByTestId } = render(renderer(<IconButton context="help" onClick={onClick} />));
    fireEvent.click(getByTestId("iconbutton-testid"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
