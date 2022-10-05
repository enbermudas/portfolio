import Draggable from "react-draggable";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { useClickInside } from "../../helpers";
import {
  Wrapper,
  Frame,
  Title,
  TitleLeft,
  TitleIcon,
  TitleText,
  TitleButtons,
  Menu,
  MenuItem,
  Address,
  AddressInput,
  AddressIcon,
  HandleDrag,
  Content,
  CallToAction
} from "./Window.styled";
import IconButton from "../IconButton";
import Button from "../Button";

export type WindowType = {
  id: string;
  icon: string;
  name: string;
  top: number;
  left: number;
  visible: boolean;
  inactive: boolean;
  hasCTA: boolean;
  content: JSX.Element;
  isFolder: boolean;
};

export interface WindowProps {
  id: string;
  icon: string;
  name: string;
  top: number;
  left: number;
  visible: boolean;
  inactive: boolean;
  hasCTA: boolean;
  content: JSX.Element;
  isFolder: boolean;
  onSelect: () => void;
  onDeselect: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
};

const Window = ({
  id,
  icon,
  name,
  onMinimize,
  onMaximize,
  onClose,
  onSelect,
  onDeselect,
  top,
  left,
  visible,
  inactive,
  hasCTA,
  content,
  isFolder,
  onSubmit = () => { },
  submitText = "",
  onCancel = () => { },
  cancelText = "",
}: WindowProps) => {
  const ref = useRef(null);

  const activateWindow = () => {
    onSelect();
  };

  useClickAway(ref, () => {
    if (!inactive) onDeselect();
  });

  useClickInside(ref, () => {
    if (inactive) activateWindow();
  });

  return (
    <Wrapper inactive={inactive} visible={visible}>
      <Draggable
        key={id}
        axis="both"
        handle=".handle"
        defaultPosition={{ x: left, y: top }}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          <Frame ref={ref} id={id} data-testid={`${id}-window-testid`}>
            <Title inactive={inactive} className="handle" data-testid={`${id}-window-title-testid`}>
              <TitleLeft>
                <TitleIcon src={require(`../../images/${icon}.png`)} alt={name} />
                <TitleText className="titleText">{name}</TitleText>
              </TitleLeft>
              <TitleButtons>
                <IconButton context="minimize" onClick={onMinimize} testId="minimize-testid" />
                <IconButton context="maximize" onClick={onMaximize} testId="maximize-testid" />
                <IconButton context="close" onClick={onClose} testId="close-testid" />
              </TitleButtons>
            </Title>

            <Menu>
              <HandleDrag />
              <MenuItem>File</MenuItem>
              <MenuItem>Edit</MenuItem>
              <MenuItem>View</MenuItem>
              <MenuItem>Help</MenuItem>
            </Menu>

            <Address>
              <HandleDrag />
              Address
              <AddressInput>
                <AddressIcon src={require(`../../images/${icon}.png`)} alt={name} />
                {name}
              </AddressInput>
            </Address>

            <Content grid={isFolder}>{content}</Content>

            {hasCTA && (
              <CallToAction>
                {cancelText && <Button text={cancelText} onClick={onCancel} testId="cancel-testid" />}
                <Button text={submitText} onClick={onSubmit} testId="submit-testid" />
              </CallToAction>
            )}
          </Frame>
        </div>
      </Draggable>
    </Wrapper>
  );
};

export default Window;
