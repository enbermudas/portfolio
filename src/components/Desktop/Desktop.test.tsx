import { render, fireEvent } from "@testing-library/react";
import Desktop from ".";
import renderer from "../../test-renderer";

const onStart = jest.fn();
const onProjects = jest.fn();
const onExperience = jest.fn();
const onSendEmail = jest.fn();
const onTechnologies = jest.fn();
const onContact = jest.fn();
const onEducation = jest.fn();

describe("Components/Desktop", () => {
  it("Calls the start's onClick handler", () => {
    const { getByTestId } = render(renderer(
      <Desktop
        onStart={onStart}
        onProjects={onProjects}
        onExperience={onExperience}
        onSendEmail={onSendEmail}
        onTechnologies={onTechnologies}
        onContact={onContact}
        onEducation={onEducation}
      />
    ));

    fireEvent.click(getByTestId("start-button-testid"));
    expect(onStart).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("projects-testid"));
    expect(onProjects).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("experience-testid"));
    expect(onExperience).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("send-email-testid"));
    expect(onSendEmail).toHaveBeenCalledTimes(1);
  });
});
