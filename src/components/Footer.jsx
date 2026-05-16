import React from 'react'
import logo from '../assets/Logo.svg'
import { Box, Stack } from '@mui/material'

import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='w-4/5 m-auto'>
      <Stack spacing={{xs:'20px',lg:'0'}}  direction={{xs:'column',lg:'row'}} sx={{
        justifyContent:'space-between'
      }}>
        <img src={logo} alt="" />
        <Box sx={{
          width:{xs:"full",lg:'23%'}
        }}>
          <p className='mb-4'>Shihami is the world’s leading NFTs marketplace where you can discover, sell and bid NFTs and get rich </p>
          <Stack direction='row' spacing={2}>
            <FaYoutube size={24} color='#AD1AAF'/>
            <FaTwitter size={24} color='#AD1AAF' />
            <FaFacebookF size={24} color='#AD1AAF'/>
            <FaGoogle size={24} color='#AD1AAF'/>
          </Stack>
        </Box>
        <Box>
          <h1 className='font-bold'>About</h1>
          <p>About NFT</p>
          <p>Live Auctions</p>
          <p>NFT Blog</p>
          <p>Activity</p>
        </Box>
        <Box>
          <h1 className='font-bold'>Support</h1>
          <p>Help & Support</p>
          <p>Item Details</p>
          <p>Author Profile</p>
          <p>Collection</p>
        </Box>

      </Stack>
    </footer>
  )
}
