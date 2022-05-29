import React from "react";
import {Route, Routes} from "react-router-dom";
import CategoryList from "./pages/CategoryList";
import SubcategoryList from "./pages/SubcategoryList";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetails";
import PaymentAndDelivery from "./pages/PaymentAndDelivery";
import NotFound from "./pages/404";

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

export default MainContent;