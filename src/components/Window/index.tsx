import { MouseEventHandler } from "react";
import {
  Frame,
  Title,
  TitleText,
  TitleButtons,
  Content,
  CallToAction
} from "./Window.styled";
import IconButton from "../IconButton";
import Button from "../Button";

interface WindowProps {
  title: string;
  content: string;
  onMinimize: MouseEventHandler<HTMLButtonElement>;
  onMaximize: MouseEventHandler<HTMLButtonElement>;
  onClose: MouseEventHandler<HTMLButtonElement>;
  onSubmit: MouseEventHandler<HTMLButtonElement>;
  submitText: string;
  onCancel?: MouseEventHandler<HTMLButtonElement>;
  cancelText?: string;
};

const Window = ({
  title,
  content,
  onMinimize,
  onMaximize,
  onClose,
  onSubmit,
  submitText,
  onCancel = () => {},
  cancelText = "",
}: WindowProps) => {
  return (
    <Frame>
      <Title>
        <TitleText>{title}</TitleText>
        <TitleButtons>
          <IconButton context="minimize" onClick={onMinimize} testId="minimize-testid" />
          <IconButton context="maximize" onClick={onMaximize} testId="maximize-testid" />
          <IconButton context="close" onClick={onClose} testId="close-testid" />
        </TitleButtons>
      </Title>
      <Content>{content}</Content>
      <CallToAction>
        { cancelText && <Button text={cancelText} onClick={onCancel} testId="cancel-testid" /> }
        <Button text={submitText} onClick={onSubmit} testId="submit-testid" />
      </CallToAction>
    </Frame>
  );
};

export default Window;
