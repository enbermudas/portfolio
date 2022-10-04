import { useState } from "react";
import { StyledDesktop } from "./Desktop.styled";
import Folder, { FolderProps, FileType } from "../Folder";
import IconsGrid from "./IconsGrid";
import TaskBar from "./TaskBar";

const top = () => Math.random() * 200 + 200;
const left = () => Math.random() * 600 + 200;

export interface Windows {
  projects?: boolean;
  experience?: boolean;
};

const Desktop = () => {
  const [folders, setFolders] = useState<FolderProps[]>([]);
  const [windows, setWindows] = useState<Windows>({});

  /**
   * Updates the folders state.
   * @param {string} id - Id of the folder.
   * @param {boolean} visible - New visible value
   * @param {boolean} inactive - New inactive status
   */
  const setNewFolders = (id: string, visible: boolean, inactive: boolean) => {
    const newFolders = folders.map((folder) => {
      if (folder.id === id) {
        folder.visible = visible;
        folder.inactive = inactive;
      }

      return folder;
    });

    setFolders(newFolders);
  };

  /**
   * Updates taskbar's windows state.
   * @param {string} id - Id of the window.
   */
  const updateWindows = (id: string) => {
    const windowsToDisable = Object.keys(windows).filter((key) => key !== id);

    const newWindows = {...windows};
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({...newWindows, [id]: true });
  };

  /**
   * Handles folder minimize.
   * @param {string} id - Id of the folder.
   */
  const onMinimizeFolder = (id: string) => {
    const windowKey = Object.keys(windows).find((key) => key === id);

    if (windowKey) {
      const newWindows = {...windows, [windowKey]: false };
      setWindows(newWindows);
    }

    setNewFolders(id, false, false);
  };

  /**
   * Updates a folder inactive value.
   * @param {string} id - Id of the folder.
   * @param {boolean} type - New value for the folder's inactive field.
   */
  const onSetInactive = (id: string, type: boolean) => {
    const newFolders = folders.map((folder) => {
      if (folder.id === id) folder.inactive = type;
      return folder;
    });

    setFolders(newFolders);
  };

  /**
   * Shows a folder (un-minimize).
   * @param {string} id - Id of the folder.
   */
  const onFolderShow = (id: string) => {
    const windowKey = Object.keys(windows).find((key) => key === id);

    if (windowKey) {
      const newWindows = {...windows, [windowKey]: true };

      const windowsToDisable = Object.keys(windows).filter((key) => key !== id);
      windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

      setWindows(newWindows);
    }

    setNewFolders(id, true, false);
  };

  /**
   * Closes a folder.
   * @param {string} id - Id of the folder.
   */
  const onFolderClose = (id: string) => {
    const newFolders = folders.filter((folder) => folder.id !== id);
    setFolders(newFolders);
  };

  /**
   * Selects a folder.
   * @param {string} id - Id of the folder.
   */
  const onFolderSelect = (id: string) => {
    const windowsToDisable = Object.keys(windows).filter((key) => key !== id);

    const newWindows = {...windows};
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({...newWindows, [id]: true });

    setNewFolders(id, true, false);
  }

  /**
   * Checks if a folder exists.
   * @param id - Id of the folder.
   * @returns {FolderProps}
   */
  const folderExist = (id: string) => {
    return folders.find((folder) => folder.id === id);
  }

  /**
   * Handles click on the project's icon.
   */
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

  /**
   * Handles click on the experience's icon.
   */
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
              data-testid={folder.testId}
              top={folder.top}
              left={folder.left}
              visible={folder.visible}
              inactive={folder.inactive}
              setInactive={onSetInactive}
            />
          )
        })}
      </>

      <TaskBar
        onStart={onStart}
        onFolderShow={onFolderShow}
        folders={folders}
        windows={windows}
      />
    </StyledDesktop>
  )
};

export default Desktop;
