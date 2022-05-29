import Header from "./pages/Header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import MainContent from "./routes";

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <MainContent />
    </ThemeProvider>
);

export default App;
