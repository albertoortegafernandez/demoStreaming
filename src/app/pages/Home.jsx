import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import placeholder from "../assets/placeholder.png"
import { Link } from 'react-router-dom'


export const Home = () => {

  return (
    <>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Typography
          component="div"
          sx={{ flexGrow: 1, color: "white", textAlign: "center", pb: 2, fontSize: "2vw" }}
        >
          Popular Titles
        </Typography>
      </Box>
      <Box sx={{ mt: 5, display: "flex" }}>
        <Card sx={{ maxWidth: 345, width: "150px", ml: "2%", mr: "5%" }}>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/films`}
          >
            <CardMedia
              sx={{ height: 140, backgroundColor: "grey" }}
              image={placeholder}
              title="films"
            />
            <CardContent>
              <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                Films
              </Typography>
            </CardContent>
          </Link>
        </Card>

        <Card sx={{ maxWidth: 345, width: "150px", ml: "2%", mr: "5%" }}>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/series`}
          >
            <CardMedia
              sx={{ height: 140, backgroundColor: "grey" }}
              image={placeholder}
              title="series"
            />
            <CardContent>
              <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
                Series
              </Typography>
            </CardContent>
          </Link>
        </Card>
      </Box >
      <Footer />
    </>
  );
};
