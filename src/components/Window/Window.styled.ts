import styled from "styled-components";

const Wrapper = styled("div")<{ inactive: boolean, visible: boolean }>`
  z-index: ${props => props.inactive ? 500 : 1000 };
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

const Frame = styled.div`
  width: 100%;
  min-width: 432px;
  position: absolute;
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

const TitleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TitleIcon = styled.img`
  width: 16px;
  height: 16px;
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

const Menu = styled.div`
  background: ${props => props.theme.colors.grayMain};
  height: 20px;
  padding: 4px;
  display: flex;
  gap: 8px;
  box-shadow: ${props => `1px 1px 0 ${props.theme.colors.white} inset, -1px -1px 0 ${props.theme.colors.graySecondary} inset`};
`;

const MenuItem = styled.div`
  font-family: ${props => props.theme.fontFamily};
  position: relative;

  &:after {
    content: '';
    width: 10px;
    height: 1px;
    background: ${props => props.theme.colors.black};
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const Address = styled.div`
  background: ${props => props.theme.colors.grayMain};
  height: 20px;
  padding: 4px;
  display: flex;
  gap: 8px;
  box-shadow: ${props => `1px 1px 0 ${props.theme.colors.white} inset, -1px -1px 0 ${props.theme.colors.graySecondary} inset;`}
  font-family: ${props => props.theme.fontFamily};
`;

const AddressInput = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256px%22%20height%3D%22256px%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%09%09%09%0A%09%09%3Cpath%20d%3D%22M0%200h224v32h-192v192h-32v-224z%22%20fill%3D%22rgb(0%2C%200%2C%200)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M224%200h32v256h-256v-32h224v-224z%22%20fill%3D%22rgb(234%2C%20230%2C%20221)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M32%2032h160v32h-128v128h-32v-160z%22%20fill%3D%22rgb(162%2C%20141%2C%20104)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M192%2032h32v192h-192v-32h160v-160z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M64%2064h128v128h-128v-128z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%0A%09%09%3C%2Fsvg%3E") 64 / 2px;
  border-color: ${props => props.theme.colors.borderShadow};
  border-style: solid;
  border-width: 2px 2px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 4px;
`;

const AddressIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const HandleDrag = styled.div`
  flex: 0 0 auto;
  width: 10px;
  box-sizing: border-box;
  align-self: stretch;
  position: relative;
  touch-action: none;

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 2px;
    top: 2px;
    width: 4px;
    bottom: 1px;
    box-sizing: border-box;
    border: 1px solid;
    border-color: ${props => `${props.theme.colors.white} ${props.theme.colors.graySecondary} ${props.theme.colors.graySecondary} ${props.theme.colors.white}`};
  }
`;

const Content = styled("div")<{ grid: boolean }>`
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.colors.white};
  border-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22256px%22%20height%3D%22256px%22%20viewBox%3D%220%200%20256%20256%22%3E%0A%09%09%09%0A%09%09%3Cpath%20d%3D%22M0%200h224v32h-192v192h-32v-224z%22%20fill%3D%22rgb(0%2C%200%2C%200)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M224%200h32v256h-256v-32h224v-224z%22%20fill%3D%22rgb(234%2C%20230%2C%20221)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M32%2032h160v32h-128v128h-32v-160z%22%20fill%3D%22rgb(162%2C%20141%2C%20104)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M192%2032h32v192h-192v-32h160v-160z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%09%3Cpath%20d%3D%22M64%2064h128v128h-128v-128z%22%20fill%3D%22rgb(213%2C%20204%2C%20187)%22%2F%3E%0A%09%0A%09%09%3C%2Fsvg%3E") 64 / 2px;
  border-color: ${props => props.theme.colors.borderShadow};
  border-style: solid;
  border-width: 2px 2px;
  margin-top: 4px;
  max-height: 500px;
  ${props => props.grid && `
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(4, 92px);
    grid-template-rows: repeat(2, 100px);
    grid-gap: 20px;
  `}
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 15px 0 10px 0;
`;

export {
  Wrapper,
  Frame,
  Title,
  TitleLeft,
  TitleIcon,
  TitleText,
  TitleButtons,
  Menu,
  MenuItem,
  Address,
  AddressInput,
  AddressIcon,
  HandleDrag,
  Content,
  CallToAction
};
