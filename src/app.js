import Header from "./pages/Header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import MainContent from "./routes";
import StickyFooter from "./pages/Footer";
import RootDiv from "./styles/RootDiv";


const App = () => (
    <ThemeProvider theme={theme}>
        <RootDiv>
            <Header />
            <MainContent />
            <StickyFooter />
        </RootDiv>
    </ThemeProvider>
);

export default App;
