import { render, fireEvent } from "@testing-library/react";
import Folder from ".";
import renderer from "../../test-renderer";

const onClick1 = jest.fn();
const onClick2 = jest.fn();
const onClick3 = jest.fn();

describe("Components/Folder", () => {
  it("Calls the onClick handler", () => {
    const { getByTestId } = render(renderer(<Folder
      id="projects"
      icon="projects_mini"
      name="Proyectos"
      files={[
        {
          id: "test1",
          icon: "link",
          name: "Test 1",
          type: "link",
          onClick: onClick1
        },
        {
          id: "test2",
          icon: "project",
          name: "Test 2",
          type: "text",
          onClick: onClick2
        }
      ]}
      onMinimize={() => {}}
      onMaximize={() => {}}
      onClose={() => {}}
      testId="projects"
    />));

    fireEvent.click(getByTestId("test1-testid"));
    expect(onClick1).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("test2-testid"));
    expect(onClick2).toHaveBeenCalledTimes(1);
  });

  it("Set the windows as active if clicks inside of it", () => {
    const { getByTestId } = render(renderer(<Folder
      id="projects"
      icon="projects_mini"
      name="Proyectos"
      files={[
        {
          id: "test3",
          icon: "link",
          name: "Test 3",
          type: "link",
          onClick: onClick3
        },
      ]}
      onMinimize={() => {}}
      onMaximize={() => {}}
      onClose={() => {}}
      testId="projects"
    />));

    const folderTitle = getByTestId("folder-title-testid");
    fireEvent.click(folderTitle);

    expect(folderTitle).toHaveStyle("background: linear-gradient(270deg,#1085D2 0%,#00007B 100%)");
  });

  it("Set the windows as inactive if clicks outside of it", () => {
    const { getByTestId } = render(renderer(<Folder
      id="projects"
      icon="projects_mini"
      name="Proyectos"
      files={[
        {
          id: "test3",
          icon: "link",
          name: "Test 3",
          type: "link",
          onClick: onClick3
        },
      ]}
      onMinimize={() => {}}
      onMaximize={() => {}}
      onClose={() => {}}
      testId="projects"
    />));

    fireEvent.click(document);

    const folderTitle = getByTestId("folder-title-testid");
    expect(folderTitle).toHaveStyle("background: linear-gradient(270deg,#ADADAD 0%,#7B7B7B 100%)");
  });
});
