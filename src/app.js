import Header from "./header/header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import {MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from "./consts";


const theme = createTheme({
    palette: {
        primary: {
            main: MAIN_TEXT_COLOR,
        },
        secondary: {
            main: MAIN_BACKGROUND_COLOR,
        }
    },
});

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>
);

export default App;
