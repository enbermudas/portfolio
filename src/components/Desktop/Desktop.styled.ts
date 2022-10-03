import styled from "styled-components";

const StyledDesktop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${props => props.theme.colors.desktopBg};
`;

const Icons = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 46px);
  display: grid;
  grid-template-columns: repeat(2, 92px);
  grid-template-rows: repeat(4, 100px);
  grid-gap: 20px;
`;

const TaskBar = styled.div`
  width: 100%;
  height: 30px;
  background: ${props => props.theme.colors.grayMain};
  padding: 3px;
  align-self: flex-end;
  box-shadow: inset 1px 0 ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.white};
`;

const StartButton = styled.button`
  background: ${props => props.theme.colors.grayMain};
  width: 80px;
  height: 30px;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  box-shadow: inset -1px -1px 0px ${props => props.theme.colors.black}, inset 1px 1px 0px ${props => props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props => props.theme.colors.graySecondary}, inset 2px 2px 0px ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;

  &:focus {
    outline: 1px dashed ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.black};
    outline-offset: -4px;
  }

  &:active {
    outline: none;
    border: 1px solid ${props => props.theme.colors.black};
  }

  &:disabled {
    outline: none;
    border: none;
    color: ${props => props.theme.colors.graySecondary};
    text-shadow: 1px 1px 0px #FFFFFF;
  }
`;

const StartIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export {
  StyledDesktop,
  Icons,
  TaskBar,
  StartButton,
  StartIcon
};
