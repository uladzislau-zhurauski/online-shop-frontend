import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {MASTERS_EMAIL, MASTERS_PHONE_NUMBER, NAVBAR_LINKS_NAMES} from "./consts";
import {MailIcon, TelegramIcon, TelephoneIcon, WhatsAppIcon} from "./icons";
import {styled} from '@mui/material/styles';


const IconRow = styled('div')`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`

const Contacts = () => (
    <Stack direction="row">
        <Stack direction="column">
            <IconRow>
                <TelephoneIcon sx={{ mx: 1 }} color="primary" fontSize="small" />
                <TelegramIcon sx={{ mx: 1 }} color="primary" fontSize="small" />
                <WhatsAppIcon sx={{ mx: 1 }} color="primary" fontSize="small" />
            </IconRow>
            <IconRow>
                <MailIcon color="primary" fontSize="small" />
            </IconRow>
        </Stack>
        <Stack direction="column" justifyContent="flex-start" sx={{ ml: 2 }}>
            <Typography variant="body1" color="primary">{MASTERS_PHONE_NUMBER}</Typography>
            <Typography variant="body1" color="primary">{MASTERS_EMAIL}</Typography>
        </Stack>
    </Stack>
);

const SearchInput = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '30%', m: 1 }}>
        <TextField
            fullWidth
            hiddenLabel
            size="small"
            id="search-input"
            placeholder="Что вы ищете?"
            variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon color="primary" />
                    </InputAdornment>
                ),
            }}
        />
    </Box>
);

const HeaderComponent = () => (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: 3, my: 1 }}
    >
        <Contacts />
        <SearchInput />
    </Stack>
);

const NavLink = (props) => (
    <Typography className={props.className} color="primary" variant="h6">
        <Link href={props.href}>{props.children}</Link>
    </Typography>
);

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

const NavBar = () => {
    let navBarLinks = [];
    NAVBAR_LINKS_NAMES.forEach((name) => {
        navBarLinks.push(<NavLink href="#" key={name}>{name}</NavLink>);
    });

    return (
        <ToolBarStyled>
            <Stack direction="row" spacing={5}>
                {navBarLinks}
            </Stack>
            <Stack direction="row" ml={5}>
                <Tooltip title="Аккаунт">
                    <IconButton aria-label="home" size="large" color="primary">
                        <PersonOutlineOutlinedIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Список желаний">
                    <IconButton aria-label="wishlist" size="large" color="primary">
                        <FavoriteBorderOutlinedIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Корзина">
                    <IconButton aria-label="cart" size="large" color="primary">
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Stack>
        </ToolBarStyled>
    );
}

const Header = () => (
    <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <HeaderComponent />
        <NavBar />
    </AppBar>
);

export default Header;
