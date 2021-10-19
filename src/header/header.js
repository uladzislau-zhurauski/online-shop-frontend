import AppBar from "@mui/material/AppBar";
import HeaderPart from "./header_part";
import NavBar from "./navbar";
import React from "react";

const Header = () => (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <HeaderPart />
        <NavBar />
    </AppBar>
);

export default Header;
