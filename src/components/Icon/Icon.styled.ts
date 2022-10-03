import styled from "styled-components";

const StyledIcon = styled.button`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
  background: transparent;
  border: none;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled("div")<{ dark: boolean }>`
  font-family: ${props => props.theme.fontFamily};
  text-align: center;
  font-size: 15px;
  color: ${props => props.dark ? props.theme.colors.black : props.theme.colors.white };
  letter-spacing: 1px;
`;

export {
  StyledIcon,
  Image,
  Title
};
