import {
  TaskBarFrame,
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
import Clock from "./Clock";
import { FolderProps } from "../Folder";
import { Windows } from ".";

interface TaskBarProps {
  onStart: () => void,
  onFolderShow: (id: string) => void,
  folders: FolderProps[],
  windows: Windows
};

const TaskBar = ({
  onStart,
  onFolderShow,
  folders,
  windows
}: TaskBarProps) => {
  return (
    <TaskBarFrame>
      <TaskBarLeft>
        <StartButton onClick={onStart} data-testid="start-button-testid">
          <StartIcon src={startIcon} alt="start-icon" />
          Start
        </StartButton>

        <TaskDivider />

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
        <Clock />
      </TaskBarTime>
    </TaskBarFrame>
  );
};

export default TaskBar;
