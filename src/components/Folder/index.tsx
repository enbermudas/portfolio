import React, { MouseEventHandler, MutableRefObject, useRef, useState } from "react";
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
} from "./Folder.styled";
import IconButton from "../IconButton";
import Icon from "../Icon";

const useClickInside = (ref: MutableRefObject<any>, callback: Function) => {
  const handleClick = (e: any) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export type FileType = "link" | "text";

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
  files: File[];
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  testId: string;
  top: number;
  left: number;
};

const Folder = ({
  id,
  icon,
  name,
  files,
  onMinimize,
  onMaximize,
  onClose,
  testId,
  top,
  left
}: FolderProps) => {
  const ref = useRef(null);
  const [inactive, setInactive] = useState<boolean>(false);

  const activateWindow = () => setInactive(false);

  useClickAway(ref, () => setInactive(true));

  useClickInside(ref, activateWindow);

  return (
    <Wrapper inactive={inactive}>
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
            <Title inactive={inactive} className="handle" data-testid="folder-title-testid">
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

            <Content>
              {files.map((file) => {
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
          </Frame>
        </div>
      </Draggable>
    </Wrapper>
  );
};

export default Folder;
