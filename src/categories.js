import './index.css'
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {MAIN_PAGE_HEADING} from "./consts";
import {styled} from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";


const HexagonContainer = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    list-style-type: none;

    @media (min-width: 1201px) { /* <- 5-4  hexagons per row */
        & {
            width: 65%;
            padding-bottom: 5%;
        }
    }
    @media (max-width: 1200px) and (min-width: 901px) { /* <- 4-3  hexagons per row */
        & {
            width: 80%;
            padding-bottom: 6%;
        }
    }
    @media (max-width: 900px) and (min-width: 601px) { /* <- 3-2  hexagons per row */
        & {
            width: 85%;
            padding-bottom: 10%;
        }
    }
    @media (max-width: 600px) { /* <- 2-1  hexagons per row */
        & {
            width: 95%;
            padding-bottom: 15%;
        }
    }
`

const HexagonItem = styled('li')`
    visibility: hidden;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    transition: all 0.5s;
    backface-visibility: hidden;
    will-change: transform;

    &::after {
        content: '';
        display: block;
        padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
    }

    @media (min-width: 901px) { /* <- 4-3  hexagons per row */
        & {
            width: 25%; /* = 100 / 4 */
        }
        &:nth-child(7n+5) { /* first hexagon of even rows */
            margin-left: 12.5%;  /* = width of .hex / 2  to indent even rows */
        }
    }
    @media (max-width: 900px) and (min-width: 601px) { /* <- 3-2  hexagons per row */
        & {
            width: 33.333%; /* = 100 / 3 */
        }
        &:nth-child(5n+4) { /* first hexagon of even rows */
            margin-left: 16.666%;  /* = width of .hex / 2  to indent even rows */
        }
    }
    @media (max-width: 600px) { /* <- 2-1  hexagons per row */
        & {
            width: 50%; /* = 100 / 2 */
        }
        &:nth-child(3n+3) { /* first hexagon of even rows */
            margin-left: 25%;  /* = width of .hex / 2  to indent even rows */
        }
    }
`

const HexagonShape = styled('div')`
    position: absolute;
    width: 96%;
    padding-bottom: 110.851%; /* =  width / sin(60) */
    margin: 2%;
    overflow: hidden;
    visibility: hidden;
    outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    transition: all 0.5s;

    & * {
        position: absolute;
        visibility: visible;
        outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    }
`

const HexagonLink = styled(RouterLink)`
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    cursor: pointer;
`

const HexagonBackground = styled('div')(
    ({ theme }) => `
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${theme.palette.secondary.main};

        &:before, &:after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: '';
            opacity: 0;
            transition: opacity 0.5s;
        }
        &:before {
            background: rgba(22, 103, 137, 0.3);
        }
        &:after {
            background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent);
        }        

        ${HexagonShape}:hover &:before,
        ${HexagonShape}:hover &:after {
            opacity: 1;
        }
    `,
);

const HexagonTitle = styled('div')`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
`

const Hexagon = (props) => {
    const href = props.category.child_categories.length === 0
        ? `/category/${props.category.id}/products`
        : `/category/${props.category.id}`;
    return (
        <HexagonItem>
            <HexagonShape>
                <HexagonLink to={href}>
                    <HexagonBackground />
                    <HexagonTitle>
                        <Typography sx={{ px: 1 }} variant="h6" color="primary">
                            {props.category.name.toUpperCase()}
                        </Typography>
                    </HexagonTitle>
                </HexagonLink>
            </HexagonShape>
        </HexagonItem>
    );
}

export const Heading = (props) => (
    <Typography
        sx={{ my: 3 }}
        variant="h5"
        color="primary"
        align="center"
    >
        {props.text.toUpperCase()}
    </Typography>
);

const CategoryGrid = (props) => {
    const categories = props.categories.filter((category) => (
        category.parent_category === null
    ));
    return (
        <HexagonContainer>
            {Array.from(categories).map((category, index) => (
                <Hexagon category={category} key={index} />
            ))}
        </HexagonContainer>
    );
}

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/categories/")
            .then(
                res => {
                    setCategories(res.data);
                })
            .catch(err => {console.log(err)});
    }, []);

    return (
        <main>
            <Heading text={MAIN_PAGE_HEADING} />
            <CategoryGrid categories={categories} />
        </main>
    );
}

export default CategoryList;
