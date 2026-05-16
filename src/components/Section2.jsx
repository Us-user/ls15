import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import w1 from '../assets/w1.svg'
import w2 from '../assets/w2.svg'
import w3 from '../assets/w3.svg'
import w4 from '../assets/w4.svg'
import w5 from '../assets/w5.svg'

const walletPartners = [
    {
        id: 'metamask',
        name: 'Metamask',
        image: w1
    },
    {
        id: 'binance',
        name: 'Binance',
        image: w2
    },
    {
        id: 'trust-wallet',
        name: 'Trust Wallet',
        image: w3
    },
    {
        id: 'alpha',
        name: 'Alpha',
        image: w4
    },
    {
        id: 'coingecko',
        name: 'CoinGecko',
        image: w5
    },
];

export default function Section2() {
    return (
        <section className='text-center py-20 w-4/5 m-auto'>
            <Typography variant='h5' sx={{
                background: 'linear-gradient(90deg,#FFFFFF,#F81DFB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}> Trade with world’s most trusted and fastest wallets</Typography>
            <Typography sx={{
                fontSize:{xs:'32px',lg:'74px'}
            }}>Wallets We Support</Typography>
            <Stack direction={{xs:"column",lg:'row'}} spacing={{xs:'20px', lg:'0'}} className='justify-between mt-12'>
                {walletPartners.map((el)=>{
                    return(
                        <Box key={el.id} sx={{
                            backgroundColor: 'rgba(25, 20, 36, 1)',
                            borderRadius: '16px',
                            padding: '24px 16px'
                        }}>
                            <Avatar src={el.image} sx={{width:'170px', height:'170px',backgroundColor: 'rgba(255, 255, 255, 0.05)',padding:'40px', margin:'auto'}}/>
                            <Typography sx={{
                                marginTop:'30px'
                            }}>{el.name}</Typography>
                        </Box>
                    )
                })}
            </Stack>
        </section>
    )
}
