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
import { WindowType } from "../Window";

interface TaskBarProps {
  onStart: () => void,
  onShowWindow: (id: string) => void,
  windows: WindowType[]
};

const TaskBar = ({
  onStart,
  onShowWindow,
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
          {!!windows.length && windows.map((window) => {
            return (
              <TaskBarWindow key={window.id} active={!window.inactive && window.visible} onClick={() => onShowWindow(window.id)}>
                <TaskBarWindowIcon src={require(`../../images/${window.icon}.png`)} />
                {window.name}
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
