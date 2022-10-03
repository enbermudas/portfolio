import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => props.theme.colors.grayMain};
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  border: none;
  box-shadow: inset -1px -1px 0px ${props => props.theme.colors.black}, inset 1px 1px 0px ${props => props.theme.colors.grayTertiary}, inset -2px -2px 0px ${props => props.theme.colors.graySecondary}, inset 2px 2px 0px ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    outline: none;
    border: none;
    text-shadow: 1px 1px 0px ${props => props.theme.colors.white};

    > svg {
      transform: scale(1.5);

      path {
        fill: ${props => props.theme.colors.graySecondary};
        filter: drop-shadow(1px 1px 0px ${props => props.theme.colors.white});
      }
    }
  }
`;

export default StyledButton;
