import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  textField: {
    fontFamily: "sans-serif",
  },
  palette: {
    background: {
      default: "#F4F4F4",
    },
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#B6B6B6",
    },
    error: {
      main: red.A400,
    },
    serchBoxColor: {
      main: "#F4F4F4",
    },
    btnColor: {
      main: "#47A7FF",
    },
  },
});

export default theme;
