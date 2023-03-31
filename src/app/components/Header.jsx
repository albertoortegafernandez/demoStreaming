import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to={`/`}
      >
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Demo Streaming
              </Typography>
              <Button
                color="primary"
                variant="contained"
                disableElevation
                sx={{ mt: 1.5, mb: 3, float: "right" }}
              >
                Log In
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Link>
    </>
  )
}
