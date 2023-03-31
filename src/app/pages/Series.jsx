import React from 'react'
import { Header } from '../components/Header'
import { Box, Typography } from "@mui/material";

export const Series = () => {
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
                    Popular Series
                </Typography>
            </Box>
        </>
    )
}