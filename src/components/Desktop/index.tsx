import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { StyledDesktop } from "./Desktop.styled";
import Window, { WindowType } from "src/components/Window";
import Folder from "src/components/Folder";
import Notepad from "src/components/Notepad";
import IconsGrid from "./IconsGrid";
import TaskBar from "./TaskBar";
import Notification from "./Notification";
import { RootState } from "src/store";
import { experienceData, binData } from "src/data";
import { NotificationType } from "src/store/models/notification";

const top = () => Math.random() * 200 + 200;
const left = () => Math.random() * 600 + 200;

interface DesktopProps {
  windows: WindowType[];
  notification: NotificationType;
}

const Desktop = ({ windows, notification }: DesktopProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const openWindow = (id: string, icon: string, name: string, content: JSX.Element, isFolder: boolean) => {
    const newWindow: WindowType = {
      id,
      icon,
      name,
      top: top(),
      left: left(),
      visible: true,
      inactive: false,
      hasCTA: false,
      content,
      isFolder,
    };

    dispatch.windows.addWindow(newWindow);
  };

  const onCloseWindow = (id: string) => {
    dispatch.windows.closeWindow(id);
  };

  const onShowWindow = (id: string) => {
    dispatch.windows.showWindow(id);
  };

  const onMinimizeWindow = (id: string) => {
    dispatch.windows.minimizeWindow(id);
  };

  const onBothSelects = (id: string, type: boolean) => {
    dispatch.windows.setInactive({ id, type });
  }

  const onProjectsIconClick = () => {
    openWindow("projects", "briefcase", t("projects"), <Folder files={[
      {
        id: "types-doodler",
        icon: "link",
        name: "Types Doodler",
        onClick: () => window.open("https://enbermudez.github.io/types-doodler/", "_blank", "noopener,noreferrer")
      }
    ]} />, true);
  };

  const onExperienceIconClick = () => {
    openWindow("experience", "pc", t("experience"), <Folder files={experienceData.map((exp) => {
      return {
        id: exp.id,
        icon: exp.icon,
        name: exp.name,
        onClick: () => openWindow(exp.id, exp.icon, exp.name, <Notepad text={t(exp.text)} />, false)
      }
    })} />, true);
  };

  const onBin = () => {
    openWindow("bin", "bin", t("bi "), <Folder files={binData.map((bin) => {
      return {
        id: bin.id,
        icon: bin.icon,
        name: bin.name,
        onClick: () => openWindow(bin.id, bin.icon, bin.name, <Notepad text={t(bin.text)} />, false)
      }
    })} />, true);
  };

  const onTechnologies = () => { };
  const onEducation = () => { };
  const onContact = () => { };
  const onSendEmail = () => { };
  const onStart = () => { };

  return (
    <StyledDesktop data-testid="desktop-testid">
      <IconsGrid
        onProjects={onProjectsIconClick}
        onExperience={onExperienceIconClick}
        onTechnologies={onTechnologies}
        onEducation={onEducation}
        onContact={onContact}
        onSendEmail={onSendEmail}
        onBin={onBin}
      />

      {notification.show && <Notification {...notification} />}

      <>
        {!!windows.length && windows?.map((window) => {
          return (
            <Window
              key={window.id}
              id={window.id}
              icon={window.icon}
              name={window.name}
              top={window.top}
              left={window.left}
              visible={window.visible}
              inactive={window.inactive}
              hasCTA={window.hasCTA}
              content={window.content}
              isFolder={window.isFolder}
              onSelect={() => onBothSelects(window.id, false)}
              onDeselect={() => onBothSelects(window.id, true)}
              onMinimize={() => onMinimizeWindow(window.id)}
              onMaximize={() => {}}
              onClose={() => onCloseWindow(window.id)}
              onCancel={() => onCloseWindow(window.id)}
              onSubmit={() => onCloseWindow(window.id)}
            />
          )
        })}
      </>

      <TaskBar
        onStart={onStart}
        onShowWindow={onShowWindow}
        windows={windows}
      />
    </StyledDesktop>
  )
};


const mapState = (state: RootState) => ({
  windows: state.windows,
  notification: state.notification
});

export default connect(mapState)(Desktop);
