import Link from "@mui/material/Link";
import React from "react";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {AccountButton, CartButton, FavoritesButton, NAVBAR_LINKS} from "../consts";
import {styled} from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";


const ToolBarStyled = styled(Toolbar)(
    ({ theme }) => `
        background: linear-gradient(180deg, 
                                    rgba(216, 249, 241, 0.15) 0%, 
                                    rgba(157, 237, 218, 0.69) 45.97%, 
                                    rgba(216, 249, 241, 0.15) 100%);
        display: flex;
        justify-content: center;
        border-top: 1px solid ${theme.palette.primary.main};
        border-bottom: 1px solid ${theme.palette.primary.main};
    `,
);

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
