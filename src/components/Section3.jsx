import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { LuWallet } from "react-icons/lu";
import { LuFolderOpen } from "react-icons/lu";
import { LuCopyPlus } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import NftCarousel from './NftCarousel';

const stepData = [
    {
        id: 1,
        photo: LuWallet,
        title: 'Set Up Your Wallet',
    },
    {
        id: 2,
        photo: LuFolderOpen,
        title: 'Create Your Collection',
    },
    {
        id: 3,
        photo: LuCopyPlus,
        title: 'Add Your NFTs',
    },
    {
        id: 4,
        photo: LuTrendingUp,
        title: 'List Them For Sale',
    },
];

export default function Section3() {
    return (
        <section className='w-4/5 m-auto text-center'>
            <Typography sx={{
                fontSize: { xs: '34px', lg: '74px' }
            }}>How it works</Typography>
            <Stack className='justify-between' direction={{ xs: 'column', lg: 'row' }} >
                {stepData.map((el) => {
                    return (
                        <Box key={el.id} sx={{
                            position: 'relative', // Обязательно, чтобы линия позиционировалась относительно этого шага
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flex: 1, // Равномерно распределяет шаги по всей ширине строки

                            '&:not(:last-child)::after': {
                                content: '""',
                                position: 'absolute',

                                top: '45px', // Ровно половина от высоты твоего круга (90px / 2)

                                left: 'calc(50% + 60px)', // Начинаем линию от правого края круга (центр + радиус)
                                width: 'calc(100% - 120px)', // Растягиваем до левого края следующего круга

                                borderBottom: '2px dashed rgba(255, 255, 255, 0.3)', // Цвет и шаг пунктира

                                display: { xs: 'none', md: 'block' }, // На мобилках линия исчезает, чтобы не ломать верстку
                            }
                        }}>
                            <p className='m-auto mb-4 backdrop-blur-[20px] rounded-full w-fit p-7 bg-[rgba(40,34,53,0.5)]'><el.photo size={42} color='#AD1AAF' /></p>
                            <Typography>{el.title}</Typography>
                        </Box>
                    )
                })}

                
            </Stack>
        </section>
    )
}
