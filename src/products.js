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
import {Link as RouterLink, useParams} from "react-router-dom";


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
    const image = props.product.images[0];
    return (
        <CardStyled>
            <CardActionArea sx={{ px: 2 }} component={RouterLink}
                            to={`/category/${props.categoryId}/products/${props.product.id}`}>
                <ProductCardHeader title={name} />
                <ProductCardImage image={image.image} alt={image.tip} />
                <ProductCardPrice price={price} />
            </CardActionArea>
        </CardStyled>
    );
}

const GridItems = (props) => (
    Array.from(props.products).map((product) => (
        <Grid item key={product.id}>
            <ProductCard product={product} categoryId={props.categoryId} />
        </Grid>
    ))
);

const ProductCards = (props) => (
    <ProductGrid>
        <GridItems products={props.products} categoryId={props.categoryId} />
    </ProductGrid>
);

const ProductList = () => {
    const params = useParams();
    const categoryId = params.categoryId; // use parseInt
    const products = [
        {id: 3, category: {name: "Sporting Goods"}, price: "49.99", stock: 1, name: "Football", images: [{image: "/img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"},
        {id: 4, category: {name: "Sporting Goods"}, price: "9.99", stock: 2, name: "Baseball", images: [{image: "/img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"},
        {id: 5, category: {name: "Sporting Goods"}, price: "29.99", stock: 0, name: "Basketball", images: [{image: "/img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"},
        {id: 35, category: {name: "Electronics"}, price: "99.99", stock: 2, name: "iPod Touch", images: [{image: "/img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdakdsjflaksjdfl jasldjflaksjdflkjaslkdjflkajsdl fkjasldjflkasjdlkf jaslkdjf laks jdflkja skldafjlkajsdlfkjalsdfkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"},
        {id: 231, category: {name: "Electronics"}, price: "399.99", stock: 1, name: "iPhone 5", images: [{image: "\\img\\IMG_20181209_134828.jpg", tip: "alt"}, {image: ".\\img\\IMG_20181209_134828.jpg", tip: "alt"}, {image: ".\\img\\IMG_20181209_134828.jpg", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"},
        {id: 87, category: {name: "Electronics"}, price: "199.99", stock: 0, name: "Nexus 7", images: [{image: "/img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}, {image: "./img/OnPaste.20211023-184945.png", tip: "alt"}], description: "lasdkjflaksjdflajsd jlasjdflkajsl kjfalsdkjf lkajsdl kjfalsd jflas jdflk jasld fjla;sdj fl;jasdl; fjlsjd l;fjaslkdjfa;lj", materials: "lasdkj, lasdkfj, alsdkfj, alskdfj", size: "12*17", weight: "3"}
    ]; // TODO make request to the backend
    return (
        <main>
            <Heading text={products[0].category.name} />
            <ProductCards products={products} categoryId={categoryId} />
        </main>
    );
}

export default ProductList;
