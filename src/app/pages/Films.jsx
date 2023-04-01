import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Box, Typography, Container, Card, CardActionArea, CardMedia, CardContent, Popover } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Footer } from '../components/Footer';


export const Films = () => {

    const [films, setFilms] = useState([]);
    const [sendRequest, setSendRequest] = useState(false)
    const [error, setError] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);


    useEffect(() => {
        fetch('sample.json')
            .then((res) => res.json())
            .then((data) => data.entries.filter((film) => {
                return film.programType === "movie";
            }))
            .then((matched) => {
                setTimeout(() => {
                    setFilms(matched);
                    setSendRequest(true);
                }, 2000)
            })
            .catch((error) => {
                setError(true)
            })
    }, []);

    const arrayFilms = films.filter((film) => film.releaseYear >= 2010).slice(0, 20);
    const orderedFilms = arrayFilms.sort((x, y) => x.title.localeCompare(y.title));

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


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
            {error ? <Typography sx={{ p: 2 }}>Oops,somethig went wrong....</Typography> : sendRequest ?
                < Container >
                    <Grid container spacing={1}>
                        {orderedFilms.map((item, index) => (
                            <Grid key={index} xs={8} sm={6} md={4}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Card sx={{ maxWidth: 350, mb: 1, mt: 2 }} className='resultCard'>
                                        <CardActionArea onClick={handlePopoverOpen} aria-describedby={id} variant="contained">
                                            <CardMedia
                                                component="img"
                                                image={item.images['Poster Art'].url}
                                                alt={item.title}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                    align="center"
                                                >
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handlePopoverClose}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                            }}
                                        >
                                            <Card sx={{ maxWidth: 250, mb: 1, mt: 2 }} className='resultCard'>
                                                <CardActionArea onClick={handlePopoverOpen} aria-describedby={id} variant="contained">
                                                    <CardMedia
                                                        component="img"
                                                        image={item.images['Poster Art'].url}
                                                        alt={item.title}
                                                    />
                                                    <CardContent>
                                                        <Typography sx={{ p: 2 }}>Title: {item.title}</Typography>
                                                        <Typography sx={{ p: 2 }}>Descripción: {item.description}</Typography>
                                                        <Typography sx={{ p: 2 }}>releaseYear: {item.releaseYear}</Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Popover>
                                    </Card>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Container >
                : <Typography sx={{ p: 2 }}>Loading....</Typography>}
            <Footer />
        </>
    )
}