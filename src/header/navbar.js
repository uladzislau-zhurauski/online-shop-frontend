import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {NAVBAR_LINKS_NAMES} from "../consts";
import {styled} from "@mui/material/styles";


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
        <Link href={props.href}>{props.children}</Link>
    </Typography>
);

const NavBarLinks = () => {
    let navBarLinks = [];
    NAVBAR_LINKS_NAMES.forEach((name) => {
        navBarLinks.push(<NavLink href="#" key={name}>{name}</NavLink>);
    });
    return (
        <Stack direction="row" spacing={5}>
            {navBarLinks}
        </Stack>
    );
}

const AccountButton = () => (
    <Tooltip title="Аккаунт">
        <IconButton aria-label="home" size="large" color="primary">
            <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

const FavoritesButton = () => (
    <Tooltip title="Список желаний">
        <IconButton aria-label="wishlist" size="large" color="primary">
            <FavoriteBorderOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

const CartButton = () => (
    <Tooltip title="Корзина">
        <IconButton aria-label="cart" size="large" color="primary">
            <ShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

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
