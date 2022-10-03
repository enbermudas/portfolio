import { MouseEventHandler } from "react";
import { StyledIcon, Image, Title } from "./Icon.styled";

interface IconProps {
  title: string;
  icon: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  testId: string;
};

const Icon = ({
  title,
  icon,
  testId,
  onClick
}: IconProps) => {
  return (
    <StyledIcon data-testid={testId} onClick={onClick}>
      <Image src={require(`../../images/${icon}.png`)} alt={title} />
      <Title>{title}</Title>
    </StyledIcon>
  );
};

export default Icon;
