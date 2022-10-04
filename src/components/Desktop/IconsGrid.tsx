import { Icons } from "./Desktop.styled";
import Icon from "../Icon";

interface IconsGridProps {
  onProjects: () => void;
  onExperience: () => void;
  onTechnologies: () => void;
  onEducation: () => void;
  onContact: () => void;
  onSendEmail: () => void;
  onBin: () => void;
}

const IconsGrid = ({
  onProjects,
  onExperience,
  onTechnologies,
  onEducation,
  onContact,
  onSendEmail,
  onBin
}: IconsGridProps) => {
  return (
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
        title="Enviar un correo"
        icon="send_email"
        onClick={onSendEmail}
        testId="send-email-testid"
      />

      <Icon
        title="Papelera"
        icon="bin"
        onClick={onBin}
        testId="bin-testid"
      />
    </Icons>
  );
};

export default IconsGrid;
