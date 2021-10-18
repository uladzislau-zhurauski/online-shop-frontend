import CategoryList from "./categories";
import Header from "./header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import {MAIN_TEXT_COLOR} from "./consts";


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
