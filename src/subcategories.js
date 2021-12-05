import './index.css'
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import React from "react";
import {Heading} from "./categories";
import {styled} from '@mui/material/styles';
import { Link as RouterLink, useParams } from "react-router-dom";


const SubcategoryGrid = (props) => (
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

const SubcategoryCardHeader = (props) => (
    <CardHeader
        title={props.title.toUpperCase()}
        titleTypographyProps={{ align: "center", color: "primary"}}
    />
);

const SubcategoryCardImage = (props) => (
    <CardMedia
        component="img"
        image={props.image}
        alt={props.alt}
        sx={{ borderRadius: 2 }}
    />
);

const SubcategoryCard = (props) => {
    const name = props.subcategory.name;
    const imagePath = props.subcategory.image.path;
    const imageAlt = props.subcategory.image.alt;
    return (
        <CardStyled>
            <CardActionArea sx={{ px: 2, pb: 2 }} component={RouterLink} to={`/category/${props.categoryId}/products`}>
                <SubcategoryCardHeader title={name} />
                <SubcategoryCardImage image={imagePath} alt={imageAlt} />
            </CardActionArea>
        </CardStyled>
    );
}

const GridItems = (props) => (
    Array.from(props.subcategories).map((subcategory) => (
        <Grid item key={subcategory.name}>
            <SubcategoryCard subcategory={subcategory} categoryId={props.categoryId} />
        </Grid>
    ))
);

const SubcategoryCards = (props) => (
    <SubcategoryGrid>
        <GridItems subcategories={props.subcategories} categoryId={props.categoryId} />
    </SubcategoryGrid>
);

const SubcategoryList = () => {
    const params = useParams();
    const categoryId = params.categoryId; // use parseInt
    const category = {
        name: "Фотоальбомы",
        subcategories: [
            {name: "Оформленные фотоальбомы", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "Фотоальбомы с печатными страницами", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "Фотоальбомы с чистыми страницами", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "asdfasdf", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "askdfjalsdkf", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "asdlsljdf huihjkhkjhkjhk sdkfjlasdjf ljadslkfjal sjfdladksjflkaj asjdkfjlaksdjlf jdlaksjfljasldk", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "askdfjalsdkfj", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}},
            {name: "aksldkjf", image: {path: "/img/OnPaste.20211023-184945.png", alt: "alt"}}
        ]
    }; // TODO make request to the backend
    return (
        <main>
            <Heading text={category.name} />
            <SubcategoryCards subcategories={category.subcategories} categoryId={categoryId} />
        </main>
    );
}

export default SubcategoryList;
