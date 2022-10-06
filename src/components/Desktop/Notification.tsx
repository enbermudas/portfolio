import Draggable from "react-draggable";
import { NotificationType } from "src/store/models/notification";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  Frame,
  Title,
  TitleLeft,
  TitleIcon,
  TitleText,
  TitleButtons,
  Padded,
  CallToAction
} from "src/components/Window/Window.styled";
import IconButton from "src/components/IconButton";
import Button from "src/components/Button";

const Notification = ({
  title,
  text,
}: NotificationType) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch.notification.hideNotification();
  };

  return (
    <Wrapper inactive={false} visible={true}>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 1000, y: 400 }}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          <Frame>
            <Title inactive={false} className="handle" data-testid={`notification-title-testid`}>
              <TitleLeft>
                <TitleIcon src={require(`../../images/information_mini.png`)} alt="Information" />
                <TitleText className="titleText">{t(title)}</TitleText>
              </TitleLeft>
              <TitleButtons>
                <IconButton context="minimize" onClick={() => { }} disabled testId="minimize-testid" />
                <IconButton context="maximize" onClick={() => { }} disabled testId="maximize-testid" />
                <IconButton context="close" onClick={onClose} testId="close-testid" />
              </TitleButtons>
            </Title>

            <Padded>{t(text)}</Padded>

            <CallToAction>
              <Button text={t("ok")} onClick={onClose} testId="submit-testid" />
            </CallToAction>
          </Frame>
        </div>
      </Draggable>
    </Wrapper>
  );
};

export default Notification;
