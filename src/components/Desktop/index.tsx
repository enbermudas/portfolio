import { MouseEventHandler } from "react";
import { StyledDesktop, Icons, TaskBar, StartButton, StartIcon } from "./Desktop.styled";
import startIcon from "../../images/start.png";
import Icon from "../Icon";

interface DesktopProps {
  onStart: MouseEventHandler<HTMLButtonElement>;
  onProjects: MouseEventHandler<HTMLButtonElement>;
  onExperience: MouseEventHandler<HTMLButtonElement>;
  onSendEmail: MouseEventHandler<HTMLButtonElement>;
  onTechnologies: MouseEventHandler<HTMLButtonElement>;
  onContact: MouseEventHandler<HTMLButtonElement>;
  onEducation: MouseEventHandler<HTMLButtonElement>;
};

const Desktop = ({
  onStart,
  onProjects,
  onExperience,
  onSendEmail,
  onTechnologies,
  onContact,
  onEducation
}: DesktopProps) => {
  return (
    <StyledDesktop>
      <Icons>
        <Icon
          title="Proyectos"
          icon="projects"
          onClick={onProjects}
          testId="projects-testid"
        />

        <Icon
          title="Experiencia"
          icon="experience"
          onClick={onExperience}
          testId="experience-testid"
        />

        <Icon
          title="Tecnologías"
          icon="technologies"
          onClick={onTechnologies}
          testId="technologies-testid"
        />

        <Icon
          title="Educación"
          icon="education"
          onClick={onEducation}
          testId="education-testid"
        />

        <Icon
          title="Contacto"
          icon="contact"
          onClick={onContact}
          testId="contact-testid"
        />

        <Icon
          title="Enviar correo"
          icon="send_email"
          onClick={onSendEmail}
          testId="send-email-testid"
        />
      </Icons>

      <TaskBar>
        <StartButton onClick={onStart} data-testid="start-button-testid">
          <StartIcon src={startIcon} alt="start-icon" />
          Start
        </StartButton>
      </TaskBar>
    </StyledDesktop>
  )
};

export default Desktop;
