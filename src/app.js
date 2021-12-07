import CategoryList from "./categories";
import Header from "./header/header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import {MAIN_BACKGROUND_COLOR, MAIN_TEXT_COLOR} from "./consts";
import SubcategoryList from "./subcategories";
import ProductList from "./products";
import ProductDetail from "./product_detail";
import PaymentAndDelivery from "./payment_and_delivery";
import { Routes, Route } from "react-router-dom";
import NotFound from "./404";

let theme = createTheme({
    palette: {
        primary: {
            main: MAIN_TEXT_COLOR,
        },
        secondary: {
            main: MAIN_BACKGROUND_COLOR,
        },
        text: {
            primary: "rgb(116, 159, 149)",
            secondary: "rgba(116, 159, 149, 0.8)",
        }
    },
});
theme = responsiveFontSizes(theme);

const MainContent = () => (
    <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="payment-and-delivery" element={<PaymentAndDelivery />} />
        <Route path="category/:categoryId" element={<SubcategoryList />} />
        <Route path="category/:categoryId/products" element={<ProductList />} />
        <Route path="category/:categoryId/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

const App = () => (
    <ThemeProvider theme={theme}>
        <Header />
        <MainContent />
    </ThemeProvider>
);

export default App;
