import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {Link as RouterLink} from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";


const AccountButton = () => (
    <Tooltip title="Аккаунт">
        <IconButton component={RouterLink} to="sign-in" aria-label="home" size="large" color="primary">
            <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export default AccountButton;
