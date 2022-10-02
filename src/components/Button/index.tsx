import { MouseEventHandler } from "react";
import StyledButton from "./Button.styled";

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <StyledButton
      data-testid="button-testid"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
