import "../../index.css";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { MAIN_PAGE_HEADING } from "../../consts";
import axios from "axios";
import Heading from "../../components/Heading";
import {
  HexagonBackground,
  HexagonContainer,
  HexagonItem,
  HexagonLink,
  HexagonShape,
  HexagonTitle,
} from "./styles";

const Hexagon = (props) => {
  const href =
    props.category.child_categories.length === 0
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
};

const CategoryGrid = (props) => {
  const categories = props.categories.filter(
    (category) => category.parent_category === null
  );
  return (
    <HexagonContainer>
      {Array.from(categories).map((category, index) => (
        <Hexagon category={category} key={index} />
      ))}
    </HexagonContainer>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Heading text={MAIN_PAGE_HEADING} />
      <CategoryGrid categories={categories} />
    </main>
  );
};

export default CategoryList;
