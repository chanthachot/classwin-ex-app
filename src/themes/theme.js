import { blue, pink, grey, green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: blue,
        secondary: pink,
        grey: {
            light: grey[200],
            main: grey[300],
            dark: grey[700],
            dark1: grey[800],
            dark2: grey[900],
        },
        green: {
            main: green[400],
            dark: green[700],
        }
    },
    typography: {
        fontFamily: "Kanit, sans-serif"
    }
});
