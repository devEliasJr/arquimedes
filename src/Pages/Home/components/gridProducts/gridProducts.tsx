import { Box, Grid, useMediaQuery } from "@mui/material";
import HomeCard from "../../../../components/homeCard";
import { useTheme } from "@emotion/react";
import DefaultPageStructure from "../../../../components/defaultPageStrucuture";

const produtos = [
  {
    nome: "Produto 1",
    imagem: "https://via.placeholder.com/150",
    preco: 19.99,
  },
  {
    nome: "Produto 2",
    imagem: "https://via.placeholder.com/150",
    preco: 29.99,
  },
  {
    nome: "Produto 3",
    imagem: "https://via.placeholder.com/150",
    preco: 14.99,
  },
  {
    nome: "Produto 4",
    imagem: "https://via.placeholder.com/150",
    preco: 39.99,
  },
  {
    nome: "Produto 5",
    imagem: "https://via.placeholder.com/150",
    preco: 24.99,
  },
  {
    nome: "Produto 6",
    imagem: "https://via.placeholder.com/150",
    preco: 49.99,
  },
  {
    nome: "Produto 7",
    imagem: "https://via.placeholder.com/150",
    preco: 9.99,
  },
  {
    nome: "Produto 8",
    imagem: "https://via.placeholder.com/150",
    preco: 34.99,
  },
  {
    nome: "Produto 9",
    imagem: "https://via.placeholder.com/150",
    preco: 22.99,
  },
  {
    nome: "Produto 10",
    imagem: "https://via.placeholder.com/150",
    preco: 59.99,
  },
];

export default function GridProducts() {
  return (
    <DefaultPageStructure>
      <Grid container spacing={2}>
        {produtos.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <HomeCard />
          </Grid>
        ))}
      </Grid>
    </DefaultPageStructure>
  );
}
