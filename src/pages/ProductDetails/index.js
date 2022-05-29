import "react-image-gallery/styles/css/image-gallery.css";
import Box from "@mui/material/Box";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from "@mui/material/Grid";
import ImageGallery from 'react-image-gallery';
import Link from "@mui/material/Link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BoldText from "../../components/BoldText";
import {Link as RouterLink, useParams} from "react-router-dom";
import axios from "axios";
import NoImage from "../../components/NoImage";
import {OrderButtonStyled} from "./styles";

const ProductGrid = (props) => (
    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        spacing={3}
        sx={{ mb: 3, mt: 0, px: 5 }}
    >
        {props.children}
    </Grid>
);

const ProductName = (props) => (
    <Typography color="primary" variant="h3">
        {props.name}
    </Typography>
);

const BreadcrumbLink = (props) => (
    <Link component={RouterLink} to={props.href} color="inherit" underline="hover">
        {props.children}
    </Link>
);

const ProductBreadcrumbs = (props) => {
    let category = props.category;
    category.child_categories = [];
    let parentCategories = [category];
    while (category.parent_category !== null) {
        parentCategories.push(category.parent_category);
        category = category.parent_category;
    }
    const categoryLinks = parentCategories.map((category) => {
        const href = category.child_categories.length === 0
            ? `/category/${category.id}/products`
            : `/category/${category.id}`;
        return (
            <BreadcrumbLink href={href} key={category.id}>
                {category.name}
            </BreadcrumbLink>);
    }).reverse();

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            {categoryLinks}
            <Typography color="text.primary">{props.productName}</Typography>
        </Breadcrumbs>
    );
}

const ImageCarousel = (props) => {
    const images = props.images.map((image) => (
        {
            original: image.image,
            thumbnail: image.image,
            originalAlt: image.tip,
            thumbnailAlt: image.tip
        }
    ));
    return (
        <ImageGallery
            items={images}
            showPlayButton={false}
            showBullets={true}
            showIndex={true}
            slideOnThumbnailOver={true}
        />
    );
}

const FirstProductDetail = (props) => (
    <Grid item xs={12} md={6}>
        <ProductName name={props.product.name} />
        <ProductBreadcrumbs productName={props.product.name} category={props.product.category} />
        <Box sx={{ maxWidth: "40rem", my: 2 }}>
            {props.product.images.length
                ? <ImageCarousel images={props.product.images} />
                : <NoImage />
            }
        </Box>
    </Grid>
);

const DescriptionHeader = () => (
    <Typography color="primary" variant="h3" gutterBottom>
        Описание
    </Typography>
);

const ProductPrice = (props) => (
    <Typography color="primary" variant="h4">
        {props.price} бел. руб.
    </Typography>
);

const InStock = () => (
    <Typography
        color="success.main"
        variant="h5"
    >
        В наличии
    </Typography>
);

const NotInStock = () => (
    <Typography
        color="warning.main"
        variant="h5"
    >
        Нет в наличии
    </Typography>
);

const IsStocked = (props) => {
    if (props.stock) {
        return <InStock/>
    }
    return <NotInStock />
}

const ProductCharacteristicsHeader = (props) => (
    <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-around"
        alignItems="center"
        sx={{ mb: 2 }}
    >
        <DescriptionHeader />
        <Stack>
            <ProductPrice price={props.product.price} />
            <IsStocked stock={props.product.stock} />
        </Stack>
    </Stack>
);

const ProductDescription = (props) => (
    <Typography color="primary" variant="body1">
        {props.description}
    </Typography>
);

const ProductMaterials = (props) => {
    if (props.materials.length === 0) return null;

    const materials = Array.from(props.materials).map((material, index) => {
        if (index + 1 === props.materials.length) return material.name;
        return `${material.name}, `;
    });

    return (
        <Typography color="primary" variant="body1">
            <BoldText>Материалы:</BoldText> {materials}
        </Typography>
    );
}

const ProductSize = (props) => (
    <Typography color="primary" variant="body1">
        <BoldText>Размер:</BoldText> {props.size} см
    </Typography>
);

const ProductWeight = (props) => (
    <Typography color="primary" variant="body1">
        <BoldText>Вес с упаковкой (кг):</BoldText> {props.weight}
    </Typography>
);

const OrderButton = () => (
    <OrderButtonStyled
        variant="contained"
        sx={{ width: "100%" }}
    >
        Оформить заявку
    </OrderButtonStyled>
);

const ProductCharacteristics = (props) => (
    <Grid item xs={12} md={6}>
        <ProductCharacteristicsHeader product={props.product} />
        <ProductDescription description={props.product.description} />
        <Box sx={{ my: 3 }}>
            <ProductMaterials materials={props.product.materials} />
            <ProductSize size={props.product.size} />
            <ProductWeight weight={props.product.weight} />
        </Box>
        <OrderButton />
    </Grid>
);

const ProductDetail = () => {
    const [product, setProduct] = useState({});

    const params = useParams();
    const productId = params.productId;

    useEffect(() => {
        axios
            .get(`http://localhost:8000/products/${productId}/`)
            .then(
                res => {
                    setProduct(res.data);
                })
            .catch(err => {console.log(err)});
    }, [productId]);

    if (Object.keys(product).length === 0) return null;

    return (
        <main>
            <ProductGrid>
                <FirstProductDetail product={product} />
                <ProductCharacteristics product={product} />
            </ProductGrid>
        </main>
    );
}

export default ProductDetail;
