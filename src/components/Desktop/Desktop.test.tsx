import { render, fireEvent } from "@testing-library/react";
import Desktop from ".";
import renderer from "../../test-renderer";

describe("Components/Desktop", () => {
  it("Opens the projects folder if the projects icon is clicked", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const projectsIcon = getByTestId("projects-testid");
    fireEvent.click(projectsIcon);

    const projectsFolder = await queryByTestId("projects-folder-testid");
    expect(projectsFolder).toBeVisible();
  });

  it("Does not opens the projects folder if it is already open", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const projectsIcon = getByTestId("projects-testid");
    fireEvent.click(projectsIcon);
    fireEvent.click(projectsIcon);

    const projectsFolder = await queryByTestId("projects-folder-testid");
    expect(projectsFolder).toBeVisible();
  });

  it("It closes the projects folder if the close button is clicked", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const projectsIcon = getByTestId("projects-testid");
    fireEvent.click(projectsIcon);

    const closeButton = getByTestId("close-testid");
    fireEvent.click(closeButton);

    const projectsFolder = await queryByTestId("projects-folder-testid");
    expect(projectsFolder).toBeNull();
  });

  it("Does not opens the experience folder if it is already open", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const experienceIcon = getByTestId("experience-testid");
    fireEvent.click(experienceIcon);
    fireEvent.click(experienceIcon);

    const experienceFolder = await queryByTestId("experience-folder-testid");
    expect(experienceFolder).toBeVisible();
  });

  it("Opens the experience folder if the experience icon is clicked", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const experienceIcon = getByTestId("experience-testid");
    fireEvent.click(experienceIcon);

    const experienceFolder = await queryByTestId("experience-folder-testid");
    expect(experienceFolder).toBeVisible();
  });

  it("It closes the experience folder if the close button is clicked", async () => {
    const { getByTestId, queryByTestId } = render(renderer(<Desktop/>));

    const experienceIcon = getByTestId("experience-testid");
    fireEvent.click(experienceIcon);

    const closeButton = getByTestId("close-testid");
    fireEvent.click(closeButton);

    const experienceFolder = await queryByTestId("experience-folder-testid");
    expect(experienceFolder).toBeNull();
  });
});
