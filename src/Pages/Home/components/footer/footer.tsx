import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, color: "#cdcecf" }} py={2}>
      <Grid container px={16}>
        <Grid item xs={6} md={3}>
          <ul style={{ listStyle: "none" }}>
            <Typography
              variant="h6"
              fontSize={"1.1rem"}
              fontWeight={"600"}
              color={"white"}
            >
              Conheça-nos
            </Typography>
            <li>Sobre</li>
            <li>Informações</li>
            <li>Carreiras</li>
            <li>Comunidade</li>
          </ul>
        </Grid>

        <Grid item xs={6} md={3}>
          <ul style={{ listStyle: "none" }}>
            <Typography
              variant="h6"
              fontSize={"1.1rem"}
              fontWeight={"600"}
              color={"white"}
            >
              Ganhe dinheiro conosco
            </Typography>
            <li>Sobre</li>
            <li>Informações</li>
            <li>Carreiras</li>
            <li>Comunidade</li>
          </ul>
        </Grid>

        <Grid item xs={6} md={3}>
          <ul style={{ listStyle: "none" }}>
            <Typography
              variant="h6"
              fontSize={"1.1rem"}
              fontWeight={"600"}
              color={"white"}
            >
              Pagamento
            </Typography>
            <li>Sobre</li>
            <li>Informações</li>
            <li>Carreiras</li>
            <li>Comunidade</li>
          </ul>
        </Grid>

        <Grid item xs={6} md={3}>
          <ul style={{ listStyle: "none" }}>
            <Typography
              variant="h6"
              fontSize={"1.1rem"}
              fontWeight={"600"}
              color={"white"}
            >
              Deixe-nos ajudar você
            </Typography>
            <li>Sobre</li>
            <li>Informações</li>
            <li>Carreiras</li>
            <li>Comunidade</li>
          </ul>
        </Grid>
      </Grid>

      <Divider />

      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        py={2}
        gap={2}
      >
        <img
          width={"50px"}
          src="https://images.vexels.com/media/users/3/224241/isolated/preview/4d2aacf413b02b74c2cdb75ea41f24d3-logotipo-diple-de-programacao.png"
        />
        <Typography>
          &copy; 2023 Arquimedes Concursos. Todos os diretiros Reservados.
        </Typography>
      </Box>
    </Box>
  );
}
