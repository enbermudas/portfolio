import { useState } from "react";
import { StyledDesktop, Icons, TaskBar, StartButton, StartIcon } from "./Desktop.styled";
import startIcon from "../../images/start.png";
import Icon from "../Icon";
import Folder, { FolderProps } from "../Folder";

const top = () => Math.random() * 200 + 200;
const left = () => Math.random() * 600 + 200;

const Desktop = () => {
  const [folders, setFolders] = useState<FolderProps[]>([]);

  const onFolderClose = (id: string) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
  };

  const folderExist = (id: string) => {
    return folders.find((folder) => folder.id === id);
  }

  const onProjects = () => {
    if (!folderExist("projects")) {
      const newFolders = [...folders, {
        id: "projects",
        icon: "projects_mini",
        name: "Proyectos",
        files: [],
        onMinimize: () => {},
        onMaximize: () => {},
        onClose: () => {},
        testId: "projects-folder-testid",
        top: top(),
        left: left(),
      }];

      setFolders(newFolders);
    }
  };

  const onExperience = () => {
    if (!folderExist("experience")) {
      const newFolders = [...folders, {
        id: "experience",
        icon: "experience_mini",
        name: "Experiencia",
        files: [],
        onMinimize: () => {},
        onMaximize: () => {},
        onClose: () => {},
        testId: "experience-folder-testid",
        top: top(),
        left: left(),
      }];

      setFolders(newFolders);
    }
  };

  const onTechnologies = () => {};
  const onEducation = () => {};
  const onContact = () => {};
  const onSendEmail = () => {};
  const onStart = () => {};

  return (
    <StyledDesktop data-testid="desktop-testid">
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
      </Icons>

      <>
        {!!folders.length && folders?.map((folder) => {
          return (
            <Folder
              id={folder.id}
              icon={folder.icon}
              name={folder.name}
              files={folder.files}
              onMinimize={folder.onMinimize}
              onMaximize={folder.onMaximize}
              onClose={() => onFolderClose(folder.id)}
              testId={folder.testId}
              top={folder.top}
              left={folder.left}
            />
          )
        })}
      </>

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
