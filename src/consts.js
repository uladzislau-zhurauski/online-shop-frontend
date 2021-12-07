import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

export const MASTERS_PHONE_NUMBER = '+375 44 550 90 59';
export const MASTERS_EMAIL = 'kitaeska@gmail.com';
export const NAVBAR_LINKS = {
    "Главная": "/",
    "Оплата и Доставка": "/payment-and-delivery/",
    "Отзывы": "/feedback/",
    "Оставить заявку": "/checkout/"
};
export const MAIN_TEXT_COLOR = '#749F95';
export const MAIN_BACKGROUND_COLOR = '#9DEDDA';
export const MAIN_PAGE_HEADING = "Изделия ручной работы";


export const AccountButton = () => (
    <Tooltip title="Аккаунт">
        <IconButton component={RouterLink} to="account" aria-label="home" size="large" color="primary">
            <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const FavoritesButton = () => (
    <Tooltip title="Список желаний">
        <IconButton component={RouterLink} to="favorites" aria-label="wishlist" size="large" color="primary">
            <FavoriteBorderOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const CartButton = () => (
    <Tooltip title="Корзина">
        <IconButton component={RouterLink} to="cart" aria-label="cart" size="large" color="primary">
            <ShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const BoldText = styled('span')(
    ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
    `,
);

export const text404 = "Oops! 404 - Запрашиваемая страница не найдена. Возможно, Вы ошиблись в URL адресе, либо же " +
    "данная страница была удалена.";
