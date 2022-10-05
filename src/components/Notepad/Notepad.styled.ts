import styled from "styled-components";

const Textarea = styled.textarea`
  font-family: ${props => props.theme.fontFamily};
  background: ${props => props.theme.colors.white};
  padding: 10px;
  resize: none;
  border: none;
  width: 100%;
  box-sizing: border-box;
  height: 300px;
  overflow-y: auto;
  font-size: 18px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export {
  Textarea
};
