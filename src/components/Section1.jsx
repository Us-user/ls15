import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import s11 from "../assets/s11.svg"
import s12 from "../assets/s12.svg"
import s13 from "../assets/s13.svg"

export default function Section1() {
  return (
    <section className='w-4/5 m-auto flex items-center justify-between py-20 gap-20 flex-col lg:flex-row'>
      <Box className="lg:w-1/2"   >
        <Typography variant='h3'>EXPLORE, CREATE AND SELL YOUR  NFT’S  ON SHIHAMI</Typography>
        <Typography sx={{
          fontSize: '24px',
          marginTop: 5,
          marginBottom: 2,
        }}>Shihami is the World’s first and largest NFT/Avatar marketplace</Typography>
        <Stack direction="row" alignItems='center' spacing={4}>
          <Button variant='contained' sx={{
            backgroundColor: '#AD1AAF',
            display: { xs: "none", lg: 'block' },
            paddingX: 3,
            paddingY: 2
          }}>Explore More</Button>
          <Button variant='outlined' sx={{
            border: '1px solid #AD1AAF',
            display: { xs: "none", lg: 'block' },
            color: 'white'
          }}>Create</Button>
        </Stack>
      </Box>

      <Stack className=' m-auto lg:w-auto' direction={{ xs: 'column', lg: 'row' }} spacing={{xs:'10px',lg:'44px'}} sx={{ position: 'relative',
       }}>
        <Box sx={{ textAlign: 'center',backgroundColor: 'rgba(255, 255, 255, 0.01)',
          backdropFilter: 'blur(35.83px)',
          WebkitBackdropFilter: 'blur(35.83px)',
          padding:2,
          borderRadius:'42px' }}>
          <img src={s11} />
          <Typography variant='h5'>Bleeding Ghost</Typography>
          <Typography variant='p'>$ 152,793.17</Typography>
        </Box>  

        <Box sx={{
          textAlign: 'center', position: {lg:'absolute'}, top:'-120px', backgroundColor: 'rgba(255, 255, 255, 0.01)',
          backdropFilter: 'blur(35.83px)',
          WebkitBackdropFilter: 'blur(35.83px)',
          padding:2,
          borderRadius:'42px',
          zIndex:10,
          left:84
        }}>
          <img src={s12} />
          <Typography variant='h5'>Bleeding Ghost</Typography>
          <Typography variant='p'>$ 152,793.17</Typography>
        </Box>

        <Box sx={{ textAlign: 'center', transform:{lg:'translateY(50px)'},backgroundColor: 'rgba(255, 255, 255, 0.01)',
          backdropFilter: 'blur(35.83px)',
          WebkitBackdropFilter: 'blur(35.83px)',
          padding:2,
          borderRadius:'42px' }}>
          <img src={s13} />
          <Typography variant='h5'>Bleeding Ghost</Typography>
          <Typography variant='p'>$ 152,793.17</Typography>
        </Box>
      </Stack>
    </section>
  )
}
