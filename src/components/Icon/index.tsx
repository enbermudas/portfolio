import { StyledIcon, Image, Title } from "./Icon.styled";

interface IconProps {
  title: string;
  icon: string;
  onClick: () => void;
  testId: string;
  dark?: boolean;
};

const Icon = ({
  title,
  icon,
  testId,
  onClick,
  dark = false
}: IconProps) => {
  return (
    <StyledIcon data-testid={testId} onClick={onClick}>
      <Image src={require(`../../images/${icon}.png`)} alt={title} />
      <Title dark={dark}>{title}</Title>
    </StyledIcon>
  );
};

export default Icon;
