import "../../index.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Heading from "../../components/Heading";
import NoImage from "../../components/NoImage";
import { CardStyled } from "./styles";

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

const ProductCardHeader = (props) => (
  <CardHeader
    title={props.title.toUpperCase()}
    titleTypographyProps={{ align: "center", color: "primary" }}
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
  const categoryId = props.categoryId
    ? props.categoryId
    : props.product.category.id;
  return (
    <CardStyled>
      <CardActionArea
        sx={{ px: 2 }}
        component={RouterLink}
        to={`/category/${categoryId}/products/${props.product.id}`}
      >
        <ProductCardHeader title={name} />
        {image ? (
          <ProductCardImage image={image.image} alt={image.tip} />
        ) : (
          <NoImage />
        )}
        <ProductCardPrice price={price} />
      </CardActionArea>
    </CardStyled>
  );
};

const GridItems = (props) =>
  Array.from(props.products).map((product) => (
    <Grid item key={product.id}>
      <ProductCard product={product} categoryId={props.categoryId} />
    </Grid>
  ));

const ProductCards = (props) => (
  <ProductGrid>
    <GridItems products={props.products} categoryId={props.categoryId} />
  </ProductGrid>
);

const ThereAreNoProducts = () => (
  <Container>
    <Typography variant="h4" color="text.primary" align="center" sx={{ mt: 5 }}>
      В данной категории пока нет товаров
    </Typography>
  </Container>
);

const ProductList = () => {
  const [products, setProducts] = useState(null);

  const params = useParams();
  const categoryId = params.categoryId;
  let url,
    headingText = null;
  if (categoryId) {
    url = `http://localhost:8000/category/${categoryId}/`;
  } else {
    url = `http://localhost:8000/products/`;
    headingText = "Изделия ручной работы";
  }

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId, url]);

  if (!products) return null;
  if (products.length === 0) return <ThereAreNoProducts />;

  return (
    <main>
      <Heading text={headingText || products[0].category.name} />
      <ProductCards products={products} categoryId={categoryId} />
    </main>
  );
};

export default ProductList;
