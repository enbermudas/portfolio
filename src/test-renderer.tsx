import { ThemeProvider } from "styled-components";
import theme from "./theme";

const renderer = (element: JSX.Element) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default renderer;
