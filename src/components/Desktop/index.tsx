import { useState } from "react";
import { StyledDesktop } from "./Desktop.styled";
import Folder, { FolderProps, FileType, FolderType } from "../Folder";
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

  const filesThatAreFolders = {
    kenility: {
      id: "kenility",
      icon: "notepad",
      name: "Kenility",
      onMinimize: () => onMinimizeFolder("kenility"),
      onMaximize: () => { },
      onClose: () => onFolderClose("kenility"),
      onSelect: () => onFolderSelect("kenility"),
      testId: "kenility-folder-testid",
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      setInactive: () => { },
      type: "notepad" as FolderType,
      content: `Roles: Ssr Frontend Developer

        Main Stack: Javascript (React/Next.js)

        • Development and maintenance of modules in the company's internal applications.
        • Code refactoring.
        • Technical debt resolution.
        • Unit and e2e testing.`,
      onClick: () => { }
    },
    mercadolibre: {
      id: "mercadolibre",
      icon: "notepad",
      name: "MercadoLibre",
      onMinimize: () => onMinimizeFolder("mercadolibre"),
      onMaximize: () => { },
      onClose: () => onFolderClose("mercadolibre"),
      onSelect: () => onFolderSelect("mercadolibre"),
      testId: "mercadolibre-folder-testid",
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      setInactive: () => { },
      type: "notepad" as FolderType,
      content: `Roles: Ssr Frontend Developer

        Main Stack: Javascript (React) — Node (Express)

        • Development and maintenance of modules in the company's internal applications.
        • Package monitoring
        • Reports: collects, metrics, route planning and arrivals.
        • Vehicle and driver management.
        • Batch data loading.
        • Code refactoring.
        • Technical debt resolution.
        • Unit and e2e testing.`,
      onClick: () => { }
    },
    "4r-soluciones": {
      id: "4r-soluciones",
      icon: "notepad",
      name: "4rSoluciones",
      onMinimize: () => onMinimizeFolder("4r-soluciones"),
      onMaximize: () => { },
      onClose: () => onFolderClose("4r-soluciones"),
      onSelect: () => onFolderSelect("4r-soluciones"),
      testId: "4r-soluciones-folder-testid",
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      setInactive: () => { },
      type: "notepad" as FolderType,
      content: `Roles: Backend Developer / Full Stack Developer

        Main Stack: Node.js (Express) — Javascript (Vue.js, React) — SQL (MySQL)

        • Development of an applications for enterprise customers.
        • Head less CMS integrations.
        • Development of web crawlers (using Python) .
        • Development of administrative dashboards.
        • Software maintenance.`,
      onClick: () => { }
    },
    "innova-4j": {
      id: "innova-4j",
      icon: "notepad",
      name: "Innova4J",
      onMinimize: () => onMinimizeFolder("innova_4j"),
      onMaximize: () => { },
      onClose: () => onFolderClose("innova-4j"),
      onSelect: () => onFolderSelect("innova-4j"),
      testId: "innova-4j-folder-testid",
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      setInactive: () => { },
      type: "notepad" as FolderType,
      content: `Roles Javascript full-stack web developer.

      • Web application development and maintenance
      • Corporate site development
      • Third-party APIs and CMS integration`,
      onClick: () => { }
    },
    "pro-acce": {
      id: "pro-acce",
      icon: "notepad",
      name: "Pro-Acce",
      onMinimize: () => onMinimizeFolder("pro-acce"),
      onMaximize: () => { },
      onClose: () => onFolderClose("pro-acce"),
      onSelect: () => onFolderSelect("pro-acce"),
      testId: "pro-acce-folder-testid",
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      setInactive: () => { },
      type: "notepad" as FolderType,
      content: `Roles Javascript full-stack web developer.

      • Web application development and maintenance
      • Corporate site development
      • Third-party APIs and CMS integration`,
      onClick: () => { }
    }
  };

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

    const newWindows = { ...windows };
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({ ...newWindows, [id]: true });
  };

  /**
   * Handles folder minimize.
   * @param {string} id - Id of the folder.
   */
  const onMinimizeFolder = (id: string) => {
    const windowKey = Object.keys(windows).find((key) => key === id);

    if (windowKey) {
      const newWindows = { ...windows, [windowKey]: false };
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
      const newWindows = { ...windows, [windowKey]: true };

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

    const newWindows = { ...windows };
    windowsToDisable.forEach((key) => newWindows[key as keyof Windows] = false);

    setWindows({ ...newWindows, [id]: true });

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
        setInactive: () => { },
        type: "folder" as FolderType
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
          ...Object.values(filesThatAreFolders)
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
        setInactive: () => { },
        type: "folder" as FolderType
      }];

      setFolders(newFolders);
      updateWindows("experience");
    }
  };

  /**
   * Handles the opening of a file while acting as a folder.
   * @param {string} id - Id of the file.
   */
  const onFileIsFolder = (id: string) => {
    if (!folderExist(id)) {
      const newFolders = [...folders, filesThatAreFolders[id as keyof typeof filesThatAreFolders]];
      setFolders(newFolders);
      updateWindows(id);
    }
  }

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
              files={folder.files?.map((file) => {
                if (file.type !== "link") file.onClick = () => onFileIsFolder(file.id);
                return file;
              })}
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
              type={folder.type}
              content={folder.content}
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
