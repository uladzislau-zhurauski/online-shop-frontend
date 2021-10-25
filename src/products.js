import './index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';
import {styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import {Heading} from "./categories";


const ProductGrid = (props) => (
    <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ mb: 3, px: 1 }}
    >
        {props.children}
    </Grid>
);

const CardStyled = styled(Card)(
    ({ theme }) => `
        max-width: 380px;
        border-radius: ${theme.shape.borderRadius * 3}px;
        background-color: ${theme.palette.secondary.main}; 
    `,
);

const ProductCardHeader = (props) => (
    <CardHeader
        title={props.title.toUpperCase()}
        titleTypographyProps={{ align: "center", color: "primary"}}
    />
);

const ProductCardImage = (props) => (
    <CardMedia
        component="img"
        image={props.image}
        alt={props.alt}
        sx={{ borderRadius: 2 }}
    />
);

const ProductCardPrice = (props) => (
    <CardContent>
        <Typography color="primary" variant="h6" align="center">
            {props.price} руб.
        </Typography>
    </CardContent>
);

const ProductCard = (props) => {
    const name = props.product.name;
    const price = props.product.price;
    const image = props.product.image;
    return (
        <CardStyled>
            <CardActionArea sx={{ px: 2 }}>
                <ProductCardHeader title={name} />
                <ProductCardImage image={image.img} alt={image.alt} />
                <ProductCardPrice price={price} />
            </CardActionArea>
        </CardStyled>
    );
}

const GridItems = (props) => (
    Array.from(props.products).map((product) => (
        <Grid item key={product.name}>
            <ProductCard product={product} />
        </Grid>
    ))
);

const ProductCards = (props) => (
    <ProductGrid>
        <GridItems products={props.products} />
    </ProductGrid>
);

const ProductList = (props) => (
    <main>
        <Heading text={props.categoryName} />
        <ProductCards products={props.products} />
    </main>
);

export default ProductList;
