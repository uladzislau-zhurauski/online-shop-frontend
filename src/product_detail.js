import "react-image-gallery/styles/css/image-gallery.css";
import Box from "@mui/material/Box";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import ImageGallery from 'react-image-gallery';
import Link from "@mui/material/Link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {BoldText} from "./consts";
import {styled} from '@mui/material/styles';


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
    <Link href={props.href} color="inherit" underline="hover">
        {props.children}
    </Link>
);

const ProductBreadcrumbs = (props) => {
    let category = props.category;
    let categoryNames = [category.name];
    while (category.parentCategory !== null) {
        categoryNames.push(category.parentCategory.name);
        category = category.parentCategory;
    }
    const categoryLinks = categoryNames.map((name) => (
        <BreadcrumbLink href="/" key={name}>{name}</BreadcrumbLink>
    )).reverse();

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
            original: image.img,
            thumbnail: image.img,
            originalAlt: image.alt,
            thumbnailAlt: image.alt
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
    <Grid item>
        <ProductName name={props.product.name} />
        <ProductBreadcrumbs productName={props.product.name} category={props.product.category} />
        <Box sx={{ maxWidth: "40rem", my: 2 }}>
            <ImageCarousel images={props.product.images} />
        </Box>
    </Grid>
);

const DescriptionHeader = () => (
    <Typography color="primary" variant="h3">
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
        "В наличии"
    </Typography>
);

const NotInStock = () => (
    <Typography
        color="warning.main"
        variant="h5"
    >
        "Нет в наличии"
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
        direction="row"
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

const ProductMaterials = (props) => (
    <Typography color="primary" variant="body1">
        <BoldText>Материалы:</BoldText> {props.materials}
    </Typography>
);

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

const OrderButtonStyled = styled(Button)(
    ({ theme }) => `
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.secondary.main};
        font-size: 1.2rem;
        font-weight: ${theme.typography.fontWeightBold};
        transition: all 0.5s;
        &:hover {
            background-color: ${theme.palette.secondary.main};
            filter: brightness(90%);
        }
    `,
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
    <Grid item>
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

const ProductDetail = (props) => (
    <main>
        <ProductGrid>
            <FirstProductDetail product={props.product} />
            <ProductCharacteristics product={props.product} />
        </ProductGrid>
    </main>
);

export default ProductDetail;
