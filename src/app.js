import Header from "./header/header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import {MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from "./consts";


let theme = createTheme({
    palette: {
        primary: {
            main: MAIN_TEXT_COLOR,
        },
        secondary: {
            main: MAIN_BACKGROUND_COLOR,
        }
    },
});
theme = responsiveFontSizes(theme);

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
);

export default App;
