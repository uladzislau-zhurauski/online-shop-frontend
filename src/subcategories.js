import './index.css'
import Card from '@mui/material/Card';
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import {Heading} from "./categories";
import {styled} from '@mui/material/styles';
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";

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
        transition: filter 0.5s;
        :hover {
            filter: brightness(85%);
        }
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
    const imagePath = props.subcategory.image?.path || "/img/OnPaste.20211023-184945.png";
    const imageAlt = props.subcategory.image?.alt || "alt";
    const href = props.subcategory.child_categories.length === 0
        ? `/category/${props.subcategory.id}/products`
        : `/category/${props.subcategory.id}`;
    return (
        <CardStyled>
            <CardActionArea sx={{ px: 2, pb: 2 }} component={RouterLink} to={href}>
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
    const [category, setCategory] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:8000/categories/${categoryId}/`)
            .then(
                res => {
                    setCategory(res.data);
                })
            .catch(err => {console.log(err)});
    }, []);

    const params = useParams();
    const categoryId = params.categoryId;
    if (Object.keys(category).length === 0) return null;

    return (
        <main>
            <Heading text={category.name} />
            <SubcategoryCards subcategories={category.child_categories} categoryId={categoryId} />
        </main>
    );
}

export default SubcategoryList;
