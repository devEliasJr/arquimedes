// Importando as bibliotecas necessárias
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Button,
  Box,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

// Componente de card para produtos reutilizáveis
const ReusableProductCard = ({ name, image, rating, price }: any) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 180, height: 300 }} elevation={0}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          sx={{ objectFit: "cover", alignSelf: "center" }}
        />

        <Box sx={{ minHeight: "60px" }}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              fontSize={".8rem"}
              whiteSpace={"normal"}
              lineHeight="1.2"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
                WebkitLineClamp: 3,
              }}
            >
              {name}
            </Typography>

            <Tooltip
              title={`Avaliação: ${rating} de 5`}
              followCursor
              placement="top"
            >
              <Box sx={{ cursor: "pointer" }}>
                <Rating
                  name="product-rating"
                  value={rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Tooltip>

            <Typography variant="h6" fontWeight={"500"} color="text.secondary">
              R$ {price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ReusableProductCard;
