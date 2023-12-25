import { Box, Button, Typography } from "@mui/material";

export default function HomeCard() {
  return (
    <Box bgcolor={"white"} maxWidth={350} maxHeight={420} p={2} sx={{cursor: 'pointer'}}>
      <Typography variant="h5" color={"black"} fontWeight={"600"} fontSize={
        {
          xs: "1.1rem",
          sm: "1.2rem",
          md: "1.3rem",
        }
      }>
        Novo Fire TV Stick 4K com Alexa
      </Typography>
      <Box py={1}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/journeys/HpXzFDilp1CRr0K4/ZDIyMDAyM2It-w379._SY304_CB571908555_.jpg"
          width={"100%"}
        />
      </Box>
      <Button variant="text" sx={{
      fontSize: {
        xs: "0.75rem",
        sm: "0,76",
        md: "0.77rem",
      },
    }}>
        
        Confira mais
      </Button>
    </Box>
  );
}
