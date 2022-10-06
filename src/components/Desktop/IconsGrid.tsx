import { useTranslation } from "react-i18next";
import { Icons } from "./Desktop.styled";
import Icon from "src/components/Icon";

interface IconsGridProps {
  onProjects: () => void;
  onExperience: () => void;
  onTechnologies: () => void;
  onEducation: () => void;
  onContact: () => void;
  onSendEmail: () => void;
  onAbout: () => void;
  onBin: () => void;
}

const IconsGrid = ({
  onProjects,
  onExperience,
  onTechnologies,
  onEducation,
  onContact,
  onSendEmail,
  onAbout,
  onBin
}: IconsGridProps) => {
  const { t } = useTranslation();

  return (
    <Icons>
      <Icon
        title={t("projects")}
        icon="briefcase"
        onClick={onProjects}
        testId="projects-testid"
      />

      <Icon
        title={t("experience")}
        icon="pc"
        onClick={onExperience}
        testId="experience-testid"
      />

      <Icon
        title={t("technologies")}
        icon="disks"
        onClick={onTechnologies}
        testId="technologies-testid"
      />

      <Icon
        title={t("education")}
        icon="array"
        onClick={onEducation}
        testId="education-testid"
      />

      <Icon
        title={t("contact")}
        icon="phone"
        onClick={onContact}
        testId="contact-testid"
      />

      <Icon
        title={t("send_email")}
        icon="send_email"
        onClick={onSendEmail}
        testId="send-email-testid"
      />

      <Icon
        title={t("about")}
        icon="book"
        onClick={onAbout}
        testId="about-testid"
      />

      <Icon
        title={t("bin")}
        icon="bin"
        onClick={onBin}
        testId="bin-testid"
      />
    </Icons>
  );
};

export default IconsGrid;
