import CategoryList from "./categories";
import Header from "./header/header";
import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import SubcategoryList from "./subcategories";
import ProductList from "./products";
import ProductDetail from "./product_detail";
import PaymentAndDelivery from "./payment_and_delivery";
import {Route, Routes} from "react-router-dom";
import NotFound from "./404";
import SubmitApplication from "./submit_application/submit_application";
import SignIn from "./authentication/sing_in";
import SignUp from "./authentication/sign_up";
import StickyFooter from "./footer";
import Box from "@mui/material/Box";
import FeedbackList from "./feedback";
import theme from "./theme";

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
