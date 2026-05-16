import React from 'react'
import logo from '../assets/Logo.svg'
import user from '../assets/user.svg'
import { Avatar, Button, Stack, Typography } from '@mui/material'

const menuItems = [
  {
    id: 1,
    title: "EXPLORE",
  },
  {
    id: 2,
    title: "TRENDING NFTs",
  },
  {
    id: 3,
    title: "AUCTIONED NFTs",
  },
  {
    id: 4,
    title: "INFLUENCERS",
  }
];

export default function Header() {
  return (
    <header className='bg-[#140C1F] p-5'>
      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{
        justifyContent:'space-between',
        alignItems:'center',
        width:"90%",
        m:'auto'
      }}>
        <img src={logo} alt="" />
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={6} sx={{
          display:{xs:"none",lg:"flex"},
        }}>
          {menuItems.map((el) => {
            return (  
              <Typography key={el.id}
                variant="button" // Дает базовый жирный стиль
                className="text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-gray-300 hover:text-purple-400 cursor-pointer transition-all">
                {el.title}
              </Typography>
            )
          })}
        </Stack>
        <Stack direction='row' alignItems='center' justifyContent='space-center' spacing={5}>
          <Button variant='contained' sx={{
            backgroundColor:'#AD1AAF',
            display:{xs:"none",lg:'block'}
          }}>Connect Wallet</Button>
          <Avatar src={user}/>
        </Stack>
      </Stack>
    </header>
  )
}
