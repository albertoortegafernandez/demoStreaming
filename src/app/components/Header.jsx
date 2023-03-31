import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";


export const Header = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Demo Streaming
          </Typography>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            sx={{ mt: 1.5, mb: 3 }}
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
