import './index.css'
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import React from "react";
import {Heading} from "./categories";
import {styled} from '@mui/material/styles';


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
            <CardActionArea sx={{ px: 2, pb: 2 }}>
                <SubcategoryCardHeader title={name} />
                <SubcategoryCardImage image={imagePath} alt={imageAlt} />
            </CardActionArea>
        </CardStyled>
    );
}

const GridItems = (props) => (
    Array.from(props.subcategories).map((subcategory) => (
        <Grid item key={subcategory.name}>
            <SubcategoryCard subcategory={subcategory} />
        </Grid>
    ))
);

const SubcategoryCards = (props) => (
    <SubcategoryGrid>
        <GridItems subcategories={props.subcategories} />
    </SubcategoryGrid>
);

const SubcategoryList = (props) => (
    <main>
        <Heading text={props.categoryName} />
        <SubcategoryCards subcategories={props.subcategories} />
    </main>
);

export default SubcategoryList;
