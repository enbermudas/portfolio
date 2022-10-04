import { useState } from "react";
import {
  StyledDesktop,
  TaskBar,
  StartButton,
  StartIcon,
  TaskBarTime,
  TaskBarTimeIcon
} from "./Desktop.styled";
import startIcon from "../../images/start.png";
import calendarIcon from "../../images/calendar_mini.png";
import speakerIcon from "../../images/speaker_mini.png";
import Folder, { FolderProps, FileType } from "../Folder";
import Clock from "./Clock";
import IconsGrid from "./IconsGrid";

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
        files: [
          {
            id: "types-doodler",
            icon: "link",
            name: "Types Doodler",
            type: "link" as FileType,
            onClick: () => window.open("https://enbermudez.github.io/types-doodler/", '_blank', 'noopener,noreferrer')
          }
        ],
        onMinimize: () => { },
        onMaximize: () => { },
        onClose: () => { },
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
        files: [
          {
            id: "mercadolibre",
            icon: "notepad",
            name: "MercadoLibre",
            type: "text" as FileType,
            content: "Acá iría la descripción del trabajo.",
            onClick: () => { }
          }
        ],
        onMinimize: () => { },
        onMaximize: () => { },
        onClose: () => { },
        testId: "experience-folder-testid",
        top: top(),
        left: left(),
      }];

      setFolders(newFolders);
    }
  };

  const onTechnologies = () => { };
  const onEducation = () => { };
  const onContact = () => { };
  const onSendEmail = () => { };
  const onStart = () => { };
  const onBin = () => { };

  return (
    <StyledDesktop data-testid="desktop-testid">
      <IconsGrid
        onProjects={onProjects}
        onExperience={onExperience}
        onTechnologies={onTechnologies}
        onEducation={onEducation}
        onContact={onContact}
        onSendEmail={onSendEmail}
        onBin={onBin}
      />

      <>
        {!!folders.length && folders?.map((folder) => {
          return (
            <Folder
              key={folder.id}
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

        <TaskBarTime>
          <TaskBarTimeIcon src={calendarIcon} alt="calendar_icon" />
          <TaskBarTimeIcon src={speakerIcon} alt="speaker_icon" />
          <Clock/>
        </TaskBarTime>
      </TaskBar>
    </StyledDesktop>
  )
};

export default Desktop;
