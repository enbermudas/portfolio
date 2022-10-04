import { useRef } from "react";
import Draggable from "react-draggable";
import { useClickAway } from "react-use";
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
  ContentTextarea
} from "./Folder.styled";
import { useClickInside } from "../../helpers";
import IconButton from "../IconButton";
import Icon from "../Icon";

export type FileType = "link" | "text";

export type FolderType = "folder" | "notepad";

export interface File {
  id: string;
  icon: string;
  name: string;
  type: FileType;
  content?: string;
  onClick: () => void;
};

export interface FolderProps {
  id: string;
  icon: string;
  name: string;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onSelect: () => void;
  testId: string;
  top: number;
  left: number;
  visible: boolean;
  inactive: boolean;
  setInactive: (id: string, type: boolean) => void;
  type: FolderType;
  files?: Array<any>;
  content?: string;
};

const Folder = ({
  id,
  icon,
  name,
  onMinimize,
  onMaximize,
  onClose,
  onSelect,
  testId,
  top,
  left,
  visible,
  inactive,
  setInactive,
  type,
  files = [],
  content = ""
}: FolderProps) => {
  const ref = useRef(null);

  const activateWindow = () => {
    setInactive(id, false);
    onSelect();
  };

  useClickAway(ref, () => {
    if (!inactive) setInactive(id, true);
  });

  useClickInside(ref, () => {
    if (inactive) activateWindow();
  });

  const renderContent = () => {
    switch (type as FolderType) {
      case "folder":
        return (
          <Content>
            {!!files.length && files.map((file) => {
              return (
                <Icon
                  key={file.id}
                  title={file.name}
                  icon={file.icon}
                  onClick={file.onClick}
                  testId={`${file.id}-testid`}
                  dark
                />
              )
            })}
          </Content>
        );
      case "notepad":
        return (
          <ContentTextarea value={content} onChange={() => { }} />
        );
      default:
        break;
    }
  };

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
          <Frame ref={ref} id={id} data-testid={testId}>
            <Title inactive={inactive} className="handle" data-testid={`${id}-folder-title-testid`}>
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

            {renderContent()}
          </Frame>
        </div>
      </Draggable>
    </Wrapper>
  );
};

export default Folder;
