import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

export default function SectionLast() {
    return (
        <section className='w-4/5 m-auto text-center py-20'>
            <Typography variant='h2'>Ready for Next NFT Drop?</Typography>
            <Stack direction='row' sx={{
                border: '1px solid #AD1AAF',
                borderRadius: '10px',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                justifyContent: 'center',
                width: 'fit-content',
                margin: 'auto',
                paddingX: '20px',
                marginTop:'20px'

            }}>
                <TextField id="standard-basic" label="Email" variant="standard" sx={{
                    width: {xs:'200px',lg:'420px'},
                    color: 'white',
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'white',
                    },
                    '& .MuiInput-underline:before': {
                        borderBottomColor: 'rgba(255, 255, 255, 0.42)',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderBottomColor: 'white',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                    }

                }} />

                <Box sx={{
                    backgroundColor: '#AD1AAF',
                    padding: 3,
                    borderRadius: 2
                }}>
                    <FaArrowRightLong size={24} color='white' />
                </Box>
            </Stack>
        </section>
    )
}
