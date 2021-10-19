import AppBar from "@mui/material/AppBar";
import NavBar from "./navbar";
import React from "react";
import UpperHeader from "./upper_header";

const Header = () => (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <UpperHeader />
        <NavBar />
    </AppBar>
);

export default Header;
