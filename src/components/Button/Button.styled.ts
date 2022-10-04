import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.theme.colors.grayMain};
  width: 140px;
  height: 40px;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamily};
  border: none;
  box-shadow: ${props => `inset -1px -1px 0px ${props.theme.colors.black}, inset 1px 1px 0px ${props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props.theme.colors.graySecondary}, inset 2px 2px 0px ${props.theme.colors.white}`};

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

export default StyledButton;
