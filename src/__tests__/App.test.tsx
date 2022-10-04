import { render } from "@testing-library/react";
import App from "../App";
import renderer from "../test-renderer";

describe("App", () => {
  it("Renders correctly", () => {
    const container = render(renderer(<App />));
    expect(container).toMatchSnapshot();
  });
});
