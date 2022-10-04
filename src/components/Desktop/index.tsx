import { useState } from "react";
import {
  StyledDesktop,
  TaskBar,
  TaskDivider,
  TaskBarLeft,
  StartButton,
  StartIcon,
  TaskBarWindows,
  TaskBarWindow,
  TaskBarWindowIcon,
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

interface Windows {
  projects?: boolean;
  experience?: boolean;
};

const Desktop = () => {
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [windows, setWindows] = useState<Windows>({});

  const updateWindows = (id: string) => {
    const windowsToDisable = Object.keys(windows).filter((key) => key !== id);

    const newWindows = {...windows};
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({...newWindows, [id]: true });
  };

  const onMinimizeFolder = (id: string) => {
    const windowKey = Object.keys(windows).find((key) => key === id);

    if (windowKey) {
      const newWindows = {...windows, [windowKey]: false };
      setWindows(newWindows);
    }

    const newFolders = folders.map((folder) => {
      if (folder.id === id) {
        folder.visible = false;
        folder.inactive = false;
      }

      return folder;
    });

    setFolders(newFolders);
  };

  const onSetInactive = (id: string, type: boolean) => {
    const newFolders = folders.map((folder) => {
      if (folder.id === id) folder.inactive = type;
      return folder;
    });

    setFolders(newFolders);
  };

  const onFolderShow = (id: string) => {
    const windowKey = Object.keys(windows).find((key) => key === id);

    if (windowKey) {
      const newWindows = {...windows, [windowKey]: true };

      const windowsToDisable = Object.keys(windows).filter((key) => key !== id);
      windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

      setWindows(newWindows);

    }

    const newFolders = folders.map((folder) => {
      if (folder.id === id) {
        folder.visible = true;
        folder.inactive = false;
      }

      return folder;
    });

    setFolders(newFolders);
  };

  const onFolderClose = (id: string) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
  };

  const onFolderSelect = (id: string) => {
    const windowsToDisable = Object.keys(windows).filter((key) => key !== id);

    const newWindows = {...windows};
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({...newWindows, [id]: true });

    const newFolders = folders.map((folder) => {
      if (folder.id === id) {
        folder.visible = true;
        folder.inactive = false;
      }

      return folder;
    });

    setFolders(newFolders);
  }

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
        onSelect: () => { },
        testId: "projects-folder-testid",
        top: top(),
        left: left(),
        visible: true,
        inactive: false,
        setInactive: () => { }
      }];

      setFolders(newFolders);
      updateWindows("projects");
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
        onSelect: () => { },
        testId: "experience-folder-testid",
        top: top(),
        left: left(),
        visible: true,
        inactive: false,
        setInactive: () => { }
      }];

      setFolders(newFolders);
      updateWindows("experience");
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
              onMinimize={() => onMinimizeFolder(folder.id)}
              onMaximize={() => { }}
              onClose={() => onFolderClose(folder.id)}
              onSelect={() => onFolderSelect(folder.id)}
              testId={folder.testId}
              top={folder.top}
              left={folder.left}
              visible={folder.visible}
              inactive={folder.inactive}
              setInactive={onSetInactive}
            />
          )
        })}
      </>

      <TaskBar>
        <TaskBarLeft>
          <StartButton onClick={onStart} data-testid="start-button-testid">
            <StartIcon src={startIcon} alt="start-icon" />
            Start
          </StartButton>

          <TaskDivider/>

          <TaskBarWindows>
            {!!folders.length && folders.map((folder) => {
              const active: boolean = windows[folder.id as keyof Windows] || false;

              return (
                <TaskBarWindow key={folder.id} active={active && folder.visible} onClick={() => onFolderShow(folder.id)}>
                  <TaskBarWindowIcon src={require(`../../images/${folder.icon}.png`)} />
                  {folder.name}
                </TaskBarWindow>
              )
            })}
          </TaskBarWindows>
        </TaskBarLeft>

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
