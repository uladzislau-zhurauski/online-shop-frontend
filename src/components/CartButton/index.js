import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {Link as RouterLink} from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";


const CartButton = () => (
    <Tooltip title="Корзина">
        <IconButton component={RouterLink} to="cart" aria-label="cart" size="large" color="primary">
            <ShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export default CartButton;
