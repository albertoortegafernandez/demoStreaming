import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Box, Typography } from "@mui/material";
import samplejson from "../../api/sample.json"

export const Films = () => {

     const [films,setFilms] = useState([]);

     useEffect(() => {
        fetch(samplejson)
          .then((res) => res.json())
          .then((films) =>films.filter((film) => {
            return film.programType === "movie";
          }))
          .then((matched) => setFilms(matched));
      }, []);

      


    return (
        <>
            <Header />
            <Box
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    height: "5vw",
                    backgroundColor: "black",
                }}
            >
                <Typography
                    component="div"
                    sx={{ flexGrow: 1, color: "white", textAlign: "center", pb: 2, fontSize: "2vw" }}
                >
                    Popular Films
                </Typography>
            </Box>
        </>
    )
}