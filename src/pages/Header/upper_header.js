import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {MASTERS_EMAIL, MASTERS_PHONE_NUMBER} from "../../consts";
import {MailIcon, TelegramIcon, TelephoneIcon, WhatsAppIcon} from "../../icons";
import {IconRow} from "./styles";


const IconsContacts = () => (
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
);

const TextContacts = () => (
    <Stack direction="column" justifyContent="flex-start" sx={{ ml: 2 }}>
        <Typography variant="body1" color="primary">{MASTERS_PHONE_NUMBER}</Typography>
        <Typography variant="body1" color="primary">{MASTERS_EMAIL}</Typography>
    </Stack>
);

const Contacts = () => (
    <Stack direction="row">
        <IconsContacts />
        <TextContacts />
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

const UpperHeader = () => (
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

export default UpperHeader;
