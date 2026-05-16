import { Avatar, Box, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Card(props) {
    console.log(props);
    let el = props.el
    let ava = props.ava
    let deleteUser = props.deleteUser
    let openEdit = props.openEdit
    let setOpenEdit = props.setOpenEdit
    let {us,setUs,openEditModal}=props


    return (
        <Box sx={{
            width: '285px',
            backgroundColor: 'rgba(23, 19, 31, 0.65)',
            borderRadius: '24px',
            padding: '10px',
        }}>
            {/* //фото и лайке */}
            <Box sx={{
                position: 'relative'
            }}>
                <Box component="img" src={el.image} sx={{}} />
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    padding: 1
                }}><CiHeart size={20} />{el.likes}</Typography>
            </Box>

            {/* чувачок */}
            <Stack direction={{ lg: 'row' }} spacing={2} sx={{
                marginTop: '14px'
            }}>
                <Avatar src={ava} />
                <Box>
                    <Typography>{el.title}</Typography>
                    <Typography sx={{
                        fontSize: '10px'
                    }}>{el.authorName}</Typography>
                </Box>
            </Stack>

            <Stack className='justify-between mt-4' direction='row'>
                <Typography>{el.status ? "On Sale 🔥" : "Sold Out 🔒"}</Typography>
                <Box className='text-end'>
                    <Typography>{el.priceEth} ETH</Typography>
                    <Typography >($ {el.priceUsd}) </Typography>
                </Box>
            </Stack>

            <Stack direction='row' className='justify-center mt-4' spacing={2}>
                <IconButton onClick={() => deleteUser(el.id)} sx={{
                    color: 'red'
                }}>
                    <DeleteIcon />
                </IconButton>

                <IconButton onClick={() => openEditModal(el)} sx={{
                    color: 'green'
                }}>
                    <EditIcon />
                </IconButton>
            </Stack>
        </Box>
    )
}
