import Link from "@mui/material/Link";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {NAVBAR_LINKS} from "../../consts";
import {Link as RouterLink} from "react-router-dom";
import {ToolBarStyled} from "./styles";
import AccountButton from "../../components/AccountButton";
import FavoritesButton from "../../components/FavoritesButton";
import CartButton from "../../components/CartButton";


const NavLink = (props) => (
    <Typography className={props.className} color="primary" variant="h6">
        <Link component={RouterLink} to={props.href}>{props.children}</Link>
    </Typography>
);

const NavBarLinks = () => {
    const navBarLinks = [];
    for (const link in NAVBAR_LINKS) {
        navBarLinks.push(<NavLink href={NAVBAR_LINKS[link]} key={link}>{link}</NavLink>);
    }
    return (
        <Stack direction="row" spacing={5}>
            {navBarLinks}
        </Stack>
    );
}

const NavBarButtons = () => (
    <Stack direction="row" ml={5}>
        <AccountButton />
        <FavoritesButton />
        <CartButton />
    </Stack>
);

const NavBar = () => (
    <ToolBarStyled>
        <NavBarLinks />
        <NavBarButtons />
    </ToolBarStyled>
);

export default NavBar;
