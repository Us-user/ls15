import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import get1 from '../assets/get1.svg'
import get2 from '../assets/get2.svg'
import get3 from '../assets/get3.svg'
import get4 from '../assets/get4.svg'

import user from '../assets/user.svg'
import Card from './Card'
import AddModal from './AddModal'
import EditModal from './EditModal'

export default function SectionMain() {
    const [list, setList] = useState([
        {
            id: 1,
            title: 'Monkey Ape',
            authorName: '@JSmith',
            user: user,
            image: get1,
            likes: 341,
            priceEth: 4.89,
            priceUsd: '654,874.86',
            status: true,
        },
        {
            id: 2,
            title: 'Moonfall',
            authorName: '@JSmith',
            user: user,
            image: get2,
            likes: 123,
            priceEth: 4.89,
            priceUsd: '654,874.86',
            status: false,
        },
        {
            id: 3,
            title: 'Wired Human',
            authorName: '@JSmith',
            user: user,
            image: get3,
            likes: 341,
            priceEth: 4.89,
            priceUsd: '654,874.86',
            status: true,
        },
        {
            id: 4,
            title: 'Racer-To-Go',
            authorName: '@JSmith',
            user: user,
            image: get4,
            likes: 341,
            priceEth: 4.89,
            priceUsd: '654,874.86',
            status: true,
        },
    ])
    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    const [nfte, setNfte] = useState('')
    const [namee, setNamee] = useState('')
    const [priceEthe, setPriceEthe] = useState('')
    const [priceUsde, setPriceUsde] = useState('')
    const [likee, setLikee] = useState('')
    const [statuse, setStatuse] = useState(true)
    const [authorNamee, setAuthorNamee] = useState('')
    const [idx,setIdx]=useState(null)


    function deleteUser(id) {
        setList(list.filter(el => el.id != id))
    }
    function addUser(user) {
        setList([...list, user])
    }
    function openEditModal(el) {
        setOpenEdit(true)
        setNfte(el.image)
        setNamee(el.title)
        setPriceEthe(el.priceEth)
        setPriceUsde(el.priceUsd)
        setLikee(el.likes)
        setStatuse(el.status)
        setIdx(el.id)
        setAuthorNamee(el.authorName)
    }
    function editUser(){
        let upUser={
            id:idx,
            title:namee,
            authorName:authorNamee,
            user:user,
            image:nfte,
            likes:likee,
            status:statuse,
            priceEth:priceEthe,
            priceUsd:priceUsde
        }
        setList(list.map((el)=>el.id==idx ? upUser:el))
        setOpenEdit(false)
    }
    return (
        <section className='w-4/5 m-auto'>
            <Typography>Most Loved NFTs of the Time</Typography>
            <Stack className='justify-between items-center' direction={{ lg: 'row' }}>
                <Typography variant='h1'>Hot Trending NFTs </Typography>
                <Button onClick={() => setOpen(true)} sx={{
                    color: '#AD1AAF',
                    border: '1px solid #AD1AAF',
                    p: 2
                }}>Add Card</Button>
            </Stack>
            <Stack direction="row" spacing={2} sx={{
                flexWrap: 'wrap'
            }}>
                {list.map((el) => {

                    return (
                        <Card key={el.id} el={el} openEditModal={openEditModal} ava={user} deleteUser={deleteUser} openEdit={openEdit} setOpenEdit={setOpenEdit} />
                    )
                })}
            </Stack>

            <AddModal open={open} setOpen={setOpen} addUser={addUser} />
            <EditModal openEdit={openEdit} editUser={editUser} setOpenEdit={setOpenEdit} nfte={nfte} setNfte={setNfte} namee={namee} setNamee={setNamee} priceEthe={priceEthe} setPriceEthe={setPriceEthe} priceUsde={priceUsde} setPriceUsde={setPriceUsde} likee={likee} setLikee={setLikee} statuse={statuse} setStatuse={setStatuse} authorNamee={authorNamee} setAuthorNamee={setAuthorNamee} />
        </section>
    )
}
