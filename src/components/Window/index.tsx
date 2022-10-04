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
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  onSubmit: () => void;
  submitText: string;
  onCancel?: () => void;
  cancelText?: string;
  inactive?: boolean;
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
  inactive = false
}: WindowProps) => {
  return (
    <Frame>
      <Title inactive={inactive}>
        <TitleText className="titleText">{title}</TitleText>
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
