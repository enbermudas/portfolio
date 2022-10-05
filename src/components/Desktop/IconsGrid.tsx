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
        icon="briefcase"
        onClick={onProjects}
        testId="projects-testid"
      />

      <Icon
        title="Experiencia"
        icon="pc"
        onClick={onExperience}
        testId="experience-testid"
      />

      <Icon
        title="Tecnologías"
        icon="disks"
        onClick={onTechnologies}
        testId="technologies-testid"
      />

      <Icon
        title="Educación"
        icon="array"
        onClick={onEducation}
        testId="education-testid"
      />

      <Icon
        title="Contacto"
        icon="phone"
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
