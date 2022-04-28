import React from "react";
import "./FilteredCards.scss";
import Card from "../Card/Card";
import { Grid, Container, Typography, Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const FilteredCards = ({ products }) => {
  // console.log(products);

  const category = "Ən çox satılan məhsullar";
  return (
    <Container className="filtered-cards container" sx={{ paddingBlock: 3 }}>
      <Grid
        container
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" fontWeight={400}>
          {category}
        </Typography>
        <Button className="btn-show-all" endIcon={<NavigateNextIcon />}>
          Hamısına bax
        </Button>
      </Grid>
      <Grid
        className="card-container"
        container
        sx={{
          flexWrap: "nowrap",
        }}
        spacing={{ xs: 0.5, md: 1, lg: 2 }}
      >
        {products.map((item, i) => (
          <Grid item key={i} xs={8} sm={6} md={4} lg={3}>
            <Card product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FilteredCards;
