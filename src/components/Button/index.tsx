import StyledButton from "./Button.styled";

interface ButtonProps {
  text: string;
  onClick: () => void;
  testId: string;
  disabled?: boolean;
};

const Button = ({ text, onClick, testId, disabled = false }: ButtonProps) => {
  return (
    <StyledButton
      data-testid={testId}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
