import styled from "styled-components";

const StyledDesktop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${props => props.theme.colors.desktopBg};
  position: relative;
  overflow: hidden;
`;

const Icons = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: calc(100% - 36px);
  display: grid;
  grid-template-columns: repeat(2, 92px);
  grid-template-rows: repeat(4, 100px);
  grid-gap: 20px;
`;

const TaskBarFrame = styled.div`
  width: 100%;
  height: 30px;
  background: ${props => props.theme.colors.grayMain};
  padding: 3px;
  align-self: flex-end;
  box-shadow: inset 1px 0 ${props => props.theme.colors.white};
  border-top: 1px solid ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

const TaskDivider = styled.div`
  border-left: 1px solid rgb(162, 141, 104);
  border-right: 1px solid rgb(234, 230, 221);
  margin: 0 3px;
`;

const TaskBarLeft = styled.div`
  display: flex;
`;

const StartButton = styled.button`
  background: ${props => props.theme.colors.grayMain};
  width: 80px;
  height: 30px;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  box-shadow: ${props => `inset -1px -1px 0px ${props.theme.colors.black}, inset 1px 1px 0px ${props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props.theme.colors.graySecondary}, inset 2px 2px 0px ${props.theme.colors.white}`};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  margin-right: 1px;

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

const TaskBarWindows = styled.div`
  display: flex;
`;

const TaskBarWindow = styled("button")<{ active: boolean }>`
  border: none;
  background: ${props => props.theme.colors.grayMain};
  width: 160px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fontFamily};
  margin-right: 2px;
  font-size: 16px;
  ${props => props.active ? `
    border-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256px%22%20height%3D%22256px%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%09%09%09%0A%09%09%3Cpath%20d%3D%22M0%200h224v32h-192v192h-32v-224z%22%20fill%3D%22rgb(0%2C%200%2C%200)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M224%200h32v256h-256v-32h224v-224z%22%20fill%3D%22rgb(234%2C%20230%2C%20221)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M32%2032h160v32h-128v128h-32v-160z%22%20fill%3D%22rgb(162%2C%20141%2C%20104)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M192%2032h32v192h-192v-32h160v-160z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M64%2064h128v128h-128v-128z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%0A%09%09%3C%2Fsvg%3E") 64 / 2px;
    border-color: ${props.theme.colors.borderShadow};
    border-style: solid;
    border-width: 2px 2px;
  ` : `
    box-shadow: ${`inset -1px -1px 0px ${props.theme.colors.black}, inset 1px 1px 0px ${props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props.theme.colors.graySecondary}, inset 2px 2px 0px ${props.theme.colors.white}`};
  `}
  cursor: pointer;
`;

const TaskBarWindowIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const TaskBarTime = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: ${props => props.theme.fontFamily};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => `${props.theme.colors.graySecondary} ${props.theme.colors.white} ${props.theme.colors.white} ${props.theme.colors.graySecondary}`};
`;

const TaskBarTimeIcon = styled("img")<{ pointer?: boolean }>`
  width: 16px;
  height: 16px;
  ${props => props.pointer && `cursor: pointer;`}
`;

export {
  StyledDesktop,
  Icons,
  TaskBarFrame,
  TaskDivider,
  TaskBarLeft,
  StartButton,
  StartIcon,
  TaskBarWindows,
  TaskBarWindow,
  TaskBarWindowIcon,
  TaskBarTime,
  TaskBarTimeIcon
};
