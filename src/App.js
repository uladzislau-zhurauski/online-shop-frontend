import {MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from "./consts";
import Header from "./header";
import CategoryList from "./categories";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";


const theme = createTheme({
    palette: {
        primary: {
            main: MAIN_TEXT_COLOR,
        }
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <CategoryList />
        </ThemeProvider>
    );
}

export default App;
