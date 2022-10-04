import { render, fireEvent } from "@testing-library/react";
import Icon from "../components/Icon";
import renderer from "../test-renderer";

const onClick = jest.fn();

describe("Components/Icon", () => {
  it("Calls the onClick handler", () => {
    const { getByTestId } = render(renderer(<Icon title="Proyectos" icon="projects" onClick={onClick} testId="icon-testid" />));
    fireEvent.click(getByTestId("icon-testid"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
