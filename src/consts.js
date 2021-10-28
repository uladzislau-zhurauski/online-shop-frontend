import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Tooltip from "@mui/material/Tooltip";
import {styled} from "@mui/material/styles";

export const MASTERS_PHONE_NUMBER = '+375 44 550 90 59'
export const MASTERS_EMAIL = 'kitaeska@gmail.com'
export const NAVBAR_LINKS_NAMES = ["Главная", "Обо мне", "Оплата и Доставка", "Отзывы", "Контакты", "Оставить заявку"];
export const MAIN_TEXT_COLOR = '#749F95';
export const MAIN_BACKGROUND_COLOR = '#9DEDDA';
export const MAIN_PAGE_HEADING = "Изделия ручной работы";


export const AccountButton = () => (
    <Tooltip title="Аккаунт">
        <IconButton aria-label="home" size="large" color="primary">
            <PersonOutlineOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const FavoritesButton = () => (
    <Tooltip title="Список желаний">
        <IconButton aria-label="wishlist" size="large" color="primary">
            <FavoriteBorderOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const CartButton = () => (
    <Tooltip title="Корзина">
        <IconButton aria-label="cart" size="large" color="primary">
            <ShoppingCartOutlinedIcon fontSize="large" />
        </IconButton>
    </Tooltip>
);

export const BoldText = styled('span')(
    ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
    `,
);
