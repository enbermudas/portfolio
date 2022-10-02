import { MouseEventHandler } from "react";
import StyledIconButton from "./IconButton.styled";
import { ReactComponent as IconClose } from "../icons/icon-close.svg";
import { ReactComponent as IconHelp } from "../icons/icon-help.svg";
import { ReactComponent as IconMaximize } from "../icons/icon-maximize.svg";
import { ReactComponent as IconMinimize } from "../icons/icon-minimize.svg";

type Context = "close"| "help" | "maximize" | "minimize";

interface IconButtonProps {
  context: Context;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const renderIcon = () => ({
  close: <IconClose/>,
  help: <IconHelp/>,
  maximize: <IconMaximize/>,
  minimize: <IconMinimize/>
});

const IconButton = ({ context, onClick, disabled = false }: IconButtonProps) => {
  return (
    <StyledIconButton
      data-testid="iconbutton-testid"
      onClick={onClick}
      disabled={disabled}
    >
      {renderIcon()[context]}
    </StyledIconButton>
  );
};

export default IconButton;
