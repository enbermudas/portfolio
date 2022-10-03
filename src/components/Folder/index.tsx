import React, { MouseEventHandler, MutableRefObject, useRef, useState } from "react";
import { useClickAway } from "react-use";
import {
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

type FileType = "link" | "text";

export interface File {
  id: string;
  icon: string;
  name: string;
  type: FileType;
  content?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export interface FolderProps {
  id: string;
  icon: string;
  name: string;
  files: File[];
  onMinimize: MouseEventHandler<HTMLButtonElement>;
  onMaximize: MouseEventHandler<HTMLButtonElement>;
  onClose: MouseEventHandler<HTMLButtonElement>;
  testId: string;
};

const Folder = ({
  id,
  icon,
  name,
  files,
  onMinimize,
  onMaximize,
  onClose,
  testId
}: FolderProps) => {
  const ref = useRef(null);
  const [inactive, setInactive] = useState<boolean>(false);

  const activateWindow = () => setInactive(false);

  useClickAway(ref, () => setInactive(true));

  useClickInside(ref, activateWindow);

  return (
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
        <HandleDrag/>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Help</MenuItem>
      </Menu>

      <Address>
        <HandleDrag/>
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
  );
};

export default Folder;
