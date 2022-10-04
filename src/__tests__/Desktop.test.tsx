import { render, fireEvent } from "@testing-library/react";
import Desktop from "../components/Desktop";
import renderer from "../test-renderer";

global.open = jest.fn();

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

  it("It matches the current date", async () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(2022, 1, 1, 11, 11, 0));

    const { getByTestId } = render(renderer(<Desktop/>));

    const clock = getByTestId("clock-testid");
    expect(clock.textContent).toEqual("11:11");
  });

  it("It matches the current date with single digit hour/minute", async () => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date(2022, 1, 1, 0, 0, 0));

    const { getByTestId } = render(renderer(<Desktop/>));

    const clock = getByTestId("clock-testid");
    expect(clock.textContent).toEqual("00:00");
  });

  it("It opens up a new tab if a link is clicked", async () => {
    const { getByTestId } = render(renderer(<Desktop/>));

    const projectsIcon = getByTestId("projects-testid");
    fireEvent.click(projectsIcon);

    const typesDoodlerLink = getByTestId("types-doodler-testid");
    fireEvent.click(typesDoodlerLink);
    expect(global.open).toHaveBeenCalled();
  });
});
