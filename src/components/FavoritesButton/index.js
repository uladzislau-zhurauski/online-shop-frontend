import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {Link as RouterLink} from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React from "react";


const FavoritesButton = () => (
    <Tooltip title="Список желаний">
        <IconButton component={RouterLink} to="favorites" aria-label="wishlist" size="large" color="primary">
            <FavoriteBorderOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export default FavoritesButton;
