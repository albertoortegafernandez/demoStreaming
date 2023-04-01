import React from 'react'
import { Box } from "@mui/material";
import appStore from "../assets/store/app-store.svg"
import playStore from "../assets/store/play-store.svg"
import windowsStore from "../assets/store/windows-store.svg"
import facebook from "../assets/social/facebook-white.svg"
import twitter from "../assets/social/twitter-white.svg"
import instagram from "../assets/social/instagram-white.svg"

export const Footer = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1, display: "flex",height:"100px", marginTop: "auto", bottom: 0, backgroundColor: "black"}} className="footer">
              <Box sx={{p:3,flexGrow: 1}}>
                <img alt="Facebook" src={facebook} className='store-footer' />
                <img alt="Twitter" src={twitter} className='store-footer' />
                <img alt="Instagram" src={instagram} className='store-footer' />
              </Box>
              <Box sx={{p:3}}>
                <img alt="App Store" src={appStore} className='store-footer' />
                <img alt="Play  Store" src={playStore} className='store-footer' />
                <img alt="App Store" src={windowsStore} className='store-footer' />
              </Box>
        </Box>
    </>
  )
}
