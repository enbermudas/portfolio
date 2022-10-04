import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  background: ${props => props.theme.colors.grayMain};
  box-shadow: ${props => `inset -1px -1px 0px ${props.theme.colors.black}, inset 1px 1px 0px ${props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props.theme.colors.graySecondary}, inset 2px 2px 0px ${props.theme.colors.white}`};
  padding: 4px;
`;

const Title = styled("div")<{ inactive: boolean }>`
  background: ${props => `linear-gradient(270deg, ${props.inactive ? props.theme.colors.windowTitle.grayLight : props.theme.colors.windowTitle.blueLight} 0%, ${props.inactive ? props.theme.colors.windowTitle.grayDark : props.theme.colors.windowTitle.blueDark} 100%);`}
  height: 20px;
  padding: 4px;
  display: flex;
  justify-content: space-between;

  .titleText {
    color: ${props => props.inactive ? props.theme.colors.grayMain : props.theme.colors.white};
  }
`;

const TitleText = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: 900;
`;

const TitleButtons = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2px;
`;

const Content = styled.div`
  padding: 16px;
  font-family: ${props => props.theme.fontFamily};
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 15px 0 10px 0;
`;

export {
  Frame,
  Title,
  TitleText,
  TitleButtons,
  Content,
  CallToAction
};
